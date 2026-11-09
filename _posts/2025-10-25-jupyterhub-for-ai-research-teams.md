---
title: "Setting Up JupyterHub for Your AI Research Team on a New Linux Machine"
description: "A step-by-step guide to a shared JupyterHub: per-user home directories, shared read-only conda environments, personal envs, Jupyter AI, and Ray."
date: 2025-10-25
tags: [engineering, infrastructure, guide]
canonical_url: "https://gist.github.com/adivekar-utexas/229c508a735433b32524900ba4386f34"
---

<p class="post-origin">First published as a <a href="https://gist.github.com/adivekar-utexas/229c508a735433b32524900ba4386f34">GitHub gist</a> on 25 October 2025 and updated in February 2026.</p>

## The Situation

Suppose you've got a team of 2+ people who are working on an AI project (research, business, etc). and they need a common Jupyter machine where they can run notebooks.
You have two common options:
- A common JupyterLab: this has the issue that everyone uses the same UI, leading to conflicts. Example: Amazon Sagemaker Notebooks.
- A JupyterHub install: this needs a bit more setup, but gives much better separation.

The rest of this post is going to discuss how to setup JupyterHub in a way that:
1. Everyone gets their user on the machine and their  own home directory, which only they have permissions to.
1. No one can access any one else's home directories or files. 
1. Everyone has a shared set of conda environments which are read-and-executable. 
    - These appear for everyone on the JupyterLab interface in the "Select Kernel" button.
    - Doing a pip install in any of these environments will override only the user's environment, no one else is affected.
1. Everyone can create their own conda envs (only visible to them, do not appear in other people's list of kernels). 

Assumptions: 
- You have provisioned some sort of always-on Linux machine (e.g. an AWS EC2 instance) 
- You can SSH into this machine, and the machine has internet access.
- You have `sudo` access to this machine. 
- This machine has a default user like `ubuntu` or `ec2-user`.

---

## The Guide

For the rest of this guide, I will assume the default user is `ubuntu`. You can copy-paste these steps and replace it with `ec2-user`, etc.

IMPORTANT: DO NOT INSTALL MINICONDA IN THE ROOT USER'S HOME DIRECTORY i.e. `/root`
- A later step in this guide requires you to give access to users to execute a file in the conda environment to spawn their JupyterLab servers. That cannot be done if the environment lies within `/root`.

When you are logged in as the default user, the prefix on the command line should be something like this: `ubuntu@my-server:~$ `

## Step 1: Install Conda in the `default` user's home directory.

If you have already installed conda previously, you can skip this step. Make sure conda was NOT installed within the `/root` folder, by running `which conda`

The following commands will install conda in `/home/ubuntu/miniconda3/`

```
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```
Note: if these commands don't work, [check out the official page](https://www.anaconda.com/docs/getting-started/miniconda/install#linux-terminal-installer) for the latest steps (look for "Linux Terminal installer").

Next do:
```
~/miniconda3/bin/conda init bash  ## Or zsh, or whatever shell you use
```

## Step 2: Give permissions to access conda environments

```
sudo chmod o+rx /home/ubuntu
sudo chmod o+rx /home/ubuntu/miniconda3
```

## Step 3: Setup the `JUPYTER_HUB_ROOT` dir and subdirs

#### Selecting the right `JUPYTER_HUB_ROOT`

`JUPYTER_HUB_ROOT` is the root dir of your JupyterHub config and user data. 
- `JUPYTER_HUB_ROOT/config` will store JupyterHub `config.py` file and the sqlite files for the user passwords etc.
- `JUPYTER_HUB_ROOT/user` will store all user data (notebooks, files they download, non-shared conds envs, etc). 

There are two options of where you want to set it up:
- You can setup `JUPYTER_HUB_ROOT` to be a folder like `/jupyterhub`. 
    - IMPORTANT: do NOT create `JUPYTER_HUB_ROOT` inside `/root`. Users will not be able to access this folder
- (Recommeneded) `JUPYTER_HUB_ROOT` should live on a persistent file-like storage like Amazon EFS or any other Network File System (NFS). 
    - (Faliure Pattern#1) Users tend to download huge files without caring about space. This can easily fill up your entire disk for a fixed-size disk. This blocks everyone's work since they can't create files anymore. On an EFS/NFS, the disk size grows basically 
    - (Faliure Pattern#2) A very common failure is that your machine goes down because someone started a job that uses 100% of RAM and 100% of CPUs, so no one can SSH into the machine anymore or open JupyterLab. In this situation, you have to restart your machine, or even provision a new one. It's a pain to get the user data out of the machine and into a new one. With an EFS/NFS, you can just reattach it to the new machine and restart JupyterHub.
    - (Caveat#1) If you a using an EFS/NFS, you need to make sure that it is mounted to the machine before starting JupyterHub. This is something you need to do manually each time you restart the machine. A good pattern is to use a script to mount the EFS/NFS at boot time. If storing the `JUPYTER_HUB_ROOT` on the EFS/NFS, you will never forget to mount because the config file is also on the EFS/NFS.
    - (Caveat#2) Amazon EFS is interesting because it does not use traditional usernames and group names. Instead, it uses a unique ID for each user. This is handled automatically in the JupyterHub config file below: each username is mapped to a unique ID, which is the hash of the username. So it will be consistent across machines.

It is a pain to migrate user data later. Avoid it if you can by using an EFS/NFS, which you can quickly reattach to a new machine.
If you know you will never use an EFS/NFS, you can create `JUPYTER_HUB_ROOT` on `/jupyterhub` or any common location (avoid `/home/ubuntu/`, since it's weird to nest home directories of users within the default user's home directory).

#### Creating the subdirs 
Let's assume for simplicity you have selected `/jupyterhub` as the `JUPYTER_HUB_ROOT`.
Run:
```
sudo -i 
sudo mkdir -p /jupyterhub/config
sudo mkdir -p /jupyterhub/user
sudo chown root:root /jupyterhub /jupyterhub/user
sudo chmod 740 -R /jupyterhub
sudo chmod 755 /jupyterhub /jupyterhub/user
```

## Step 4: Install the JupyterHub conda environment

First we sudo:
```
sudo -i
source /home/ubuntu/.bashrc
```
You should now see a prefix like `(base) root@my-server:~#` in your command line.
Next, run:
```
conda create -n jupyterhub python=3.12 --yes  ## Update the Python version to the one you want to use
conda activate jupyterhub
conda install -c conda-forge jupyterhub --yes
conda install jupyterlab --yes
conda install notebook --yes
pip install uv
pip install ipykernel jupyterhub-firstuseauthenticator jupyter-server-proxy
pip install ipython ipykernel ipywidgets
```
Next, give users permissions to execute the following file:
```
sudo chmod o+rx /home/ubuntu
sudo chmod o+rx /home/ubuntu/miniconda3
sudo chmod -R o+rx /home/ubuntu/miniconda3/envs/jupyterhub
sudo chmod a+rx /home/ubuntu/miniconda3/envs/jupyterhub/bin/jupyterhub-singleuser
```

## Step 5: Create the JupyterHub config file

```
sudo nano /jupyterhub/config/jupyterhub_config.py
```

Use the following config settings. Important changes to make:
- Update `JUPYTER_HUB_ROOT` to the path you selected in Step 3
- `c.JupyterHub.port = 8888`: set this to the port you want to use for JupyterHub. IMPORTANT: this port must be exposed to your users.
- `c.JupyterHub.admin_users`: set this to the admin users you want to give access to JupyterHub.
Adjust other settings as needed.
```
c = get_config()

from subprocess import check_call
from hashlib import sha256
import pathlib, re, os, shutil, io

JUPYTER_HUB_ROOT = '/jupyterhub'  ## Update this to the path you selected in Step 3
USER_DIR_PATH = f'{JUPYTER_HUB_ROOT}/user'


def pre_spawn_hook(spawner):
    """Create user:"""
    username = spawner.user.name
    username = username.strip()
    if username in ['root', 'ec2-user', 'ubuntu']:
        raise ValueError(f'Cannot create user "{username}"')
    uname_exp = re.compile("^([a-zA-Z0-9-]+)$")
    if uname_exp.match(username) is None:
        raise ValueError(f'"{username}" is an invalid username. Only alphanumeric characters and hyphens are allowed.')
    uid = int(sha256(str(username).encode('utf8')).hexdigest(), 16) % (4294967294-65536) + 65536  ## Ref: https://unix.stackexchange.com/a/685943
    try:
        check_call(['useradd', '-u', f'{uid}', '-ms', '/bin/bash', '-d', f'{USER_DIR_PATH}/{username}', username])
    except Exception as e:
        print(f'{e}')
    """Create directory:"""
    username = spawner.user.name  # get the username
    volume_path = os.path.join(USER_DIR_PATH, username)
    if not os.path.exists(volume_path):
        os.mkdir(volume_path, 0o755)
    os.system(f'chown {username} {USER_DIR_PATH}/{username}/')

c.Spawner.pre_spawn_hook = pre_spawn_hook
c.Spawner.notebook_dir = USER_DIR_PATH + '/{username}/'

c.JupyterHub.admin_users = set(["admin"])  ## Update this to the admin users you want to give access to JupyterHub.
c.JupyterHub.port = 8888
c.Spawner.args = [
    '--allow-root',
]
c.ServerApp.shutdown_no_activity_timeout = 7 * 24 * 60 * 60
c.MappingKernelManager.cull_idle_timeout = 7 * 24 * 60 * 60  ## Ref: https://www.ibm.com/docs/en/spectrum-conductor/2.4.0?topic=notebooks-kernel-culling-jupyter

c.JupyterHub.authenticator_class = 'firstuseauthenticator.FirstUseAuthenticator'

c.Spawner.mem_guarantee = '2G'
c.Spawner.cpu_guarantee = 1
c.Spawner.default_url = '/lab'  ##Ref https://github.com/jupyterhub/jupyterhub/issues/2603#issuecomm$
c.Spawner.mem_limit = '200G'
c.Spawner.cpu_limit = 40
```

## Step 6: Start JupyterHub

It's best to start JupyterHub within screen or tmux, so that it continues running even if you log out.
Here is an example using `screen`:
```
screen -S jupyterhub
sudo -i
source /home/ubuntu/.bashrc
conda activate jupyterhub
jupyterhub -f /jupyterhub/config/jupyterhub_config.py
```
To logout of screen while keeping JupyterHub running, hold down `Ctrl`, then press `a` followed by `d` (both must be pressed while holding down `Ctrl`).
- IMPORTANT: On Mac, this is Control key (^) not the Command key (⌘).

To test if JupyterHub is working, visit `http://<your-server-ip>:<port>`, where `<your-server-ip>` is the IP address of your server and `<port>` is the port you set in Step 5 (default is 8888 from the config file above).
You should see the JupyterHub login page with a username and password field.


## Step 7: Create the admin user
It is very critical to create the `admin` user first and set its password. This user will have access to JupyterHub admin panel and can stop/restart other users' JupyterLab servers.
If you don't do this, and share the JupyterHub login page with your users, someone else might login as the `admin`. 
To create the admin user, login with the username `admin` and a newly-chosen password.

You can access the admin panel at: `http://<your-server-ip>:<port>/hub/admin`

## (Repeatable) Step 8: Create a regular user
To create a user, login with the username and a newly-created password. Note that usernames are limited to alphanumeric characters and hyphens.
Warning: at the moment, the config does not restrict the number of users you can create.

## (Repeatable) Step 9: Create a new conda environment (visible to all users)
To create a new conda environment visible to all users in the JupyterLab interface, run the following commands:
```
sudo -i
source /home/ubuntu/.bashrc
conda create -n common_env python=3.12 --yes  ## Can use any Python version you want
conda activate common_env
conda install <any other conda packages you want to install>
pip install uv  ## For fast installs of Pip packages
uv pip install ipython ipykernel ipywidgets
uv pip install <any other pip packages you want to install>
python -m ipykernel install --name=common_env  ## Adds the environment to everyone's JupyterLab interface
```

## (Repeatable) Step 10: Create a new conda environment (visible only to your user)
This is a step to be followed by each user after they login to their own JupyterLab instance.
```
source /home/ubuntu/.bashrc
conda create -n my_private_env python=3.12 --yes  ## Can use any Python version you want
conda activate my_private_env
conda install <any other conda packages you want to install>
pip install uv  ## For fast installs of Pip packages
uv pip install ipython ipykernel ipywidgets
uv pip install <any other pip packages you want to install>
```
You can't install the environment to be visible to other users, since it will be installed locally on your home directory.

## (Repeatable) Step 11: Override packages from the global conda environment (visible only to your user)
Often, users want to use an existing global conda environment (visible to all users) but install a few packages/package-versions specific to them.
Luckily, this is possible in much the same way as creating a new conda environment visible only to your user:

```
source /home/ubuntu/.bashrc
conda activate common_env
uv pip install <any other pip packages overrides you want to install>
```
These overrides will be specific to your user and will NOT be visible to other users. They live within the user's home directory, not in the shared conda environment in `/home/ubuntu/miniconda3/envs/common_env`.

## (Optional) Step 12: Install Jupyter AI on the JupyterHub machine
Jupyter AI adds AI coding in a notebook interface.
You can install Jupyter AI on the JupyterHub machine using the following command:
```
sudo -i
source /home/ubuntu/.bashrc
conda activate jupyterhub
uv pip install "jupyter-ai[all]" langchain-openai langchain-anthropic boto3
uv pip install jupyterhub-ai-gateway
```
Now, install the environment file which will inject keys for all your users:
```
sudo install -D -m 600 -o root -g root /dev/null /etc/jupyterhub/llm.env
```
Modify `/etc/jupyterhub/llm.env` to add your keys:
```
OPENROUTER_API_KEY=<your-openrouter-api-key>
OPENAI_API_KEY=<your-openai-api-key>
ANTHROPIC_API_KEY=<your-anthropic-api-key>
AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
```
Finally, modify the JupyterHub `config.py` file to add the following lines at the end:
```
from pathlib import Path

def load_env_file(path):
    d = {}
    p = Path(path)
    if p.exists():
        for line in p.read_text().splitlines():
            s = line.strip()
            if s and not s.startswith("#") and "=" in s:
                k, v = s.split("=", 1)
                d[k] = v
    return d

c.Spawner.environment = load_env_file("/etc/jupyterhub/llm.env")
```
Finally, restart JupyterHub to apply the changes:
```
screen -S jupyterhub  ## or screen -x jupyterhub if you are reattaching to an existing screen session
sudo -i
source /home/ubuntu/.bashrc
conda activate jupyterhub
jupyterhub -f /jupyterhub/config/config.py
```
Then, your users will be able to use Jupyter AI in their notebooks.
NOTE: for some providers (e.g. OpenRouter), it might not pick the API key from the environment variable automatically. In that case, your users can set it manually in their notebooks.


## (Optional, Repeatable) Step 13: Use Ray on the JupyterHub machine

Ray is a very popular library for distributed computing, and a great way to help your users scale their computations. Ray takes care of queueing jobs and distributing them across the cluster. It's particularly good for GPU jobs, as you can specify a fraction of the GPU to be used for each job.
There are two ways to use Ray on the JupyterHub machine.

#### Option A: Connect to an existing Ray cluster from the JupyterHub machine
Here, you don't actually have to do anything with JupyterHub except install the Ray package (`uv pip install ray`) in one of the conda environments visible to all users. 
You can use Ray as you would normally:
- The Ray head node (i.e. the master), you start a Ray cluster as follows: 
```
clear && ray stop --force && ray stop --force && sleep 5 && mkdir -p /tmp/ray/ && rm -rf /tmp/ray/* && rm -rf /tmp/tmp*.partd && mkdir -p /dev/shm/ray/ && rm -rf /dev/shm/ray/* && ray start --head --system-config='{"object_spilling_config":"{\"type\":\"filesystem\",\"params\":{\"directory_path\":\"/dev/shm/ray\"}}"}'
```
- From one or more Ray worker nodes, you can connect to the Ray cluster as follows (replacing `<ray-head-node-ip>` with the IP address of the Ray head node):
```
clear && sleep $(awk 'BEGIN{srand();print int(rand()*(5)) }') && ray stop --force && ray stop --force && mkdir -p /tmp/ray/ && rm -rf /tmp/ray/* && rm -rf /tmp/tmp*.partd && mkdir -p /dev/shm/ray/ && rm -rf /dev/shm/ray/* && ray start --address='<ray-head-node-ip>:6379'
```

To connect to the Ray cluster from the JupyterHub machine, you need to first setup a directory within `/tmp/` for the client-side Ray connections to use. These files are cleaned up automatically on reboot and periodically.
```
sudo -i 
mkdir -p /tmp/ray_client/  ## For client-side Ray connections by your users.
## Makes client files accessible to everyone now and in the future:
chmod 777 -R /tmp/ray_client/
chmod 1777 /tmp/ray_client/
```
Then, you can use the following code in your Jupyter notebook:
```python
import ray
# from ray.util.dask import enable_dask_on_ray  # Optional: for Dask on Ray   
from pprint import pprint
ray.shutdown()  # Cleans up any pending Ray connections from a kernel restart
pprint(ray.init(
    address='ray://<ray-head-node-ip>:6379',
    ignore_reinit_error=True,
    # log_to_driver=True, # Optional: for more verbose logging
    _temp_dir='/tmp/ray_client/',
    include_dashboard=False,
    # Optional: if you want to use any local Python modules which are not installed
    # on the Ray cluster (e.g. custom libraries you have written), you can add them here.
    # runtime_env={"py_modules": [  
    #     <any local Python modules you want to use on the Ray cluster>
    # ]},
))
# enable_dask_on_ray()  #  Optional: for Dask on Ray
pprint(ray.cluster_resources())
```


#### Option B: Start a Ray cluster on the JupyterHub machine
If you don't have multiple machines, you can start a Ray cluster on the JupyterHub machine. 
Ray has a splits the machine's RAM in to object-store and working memory. If your users are using Ray, this can ensure their jobs do not use more than the total machine memory (which can easily bring down the machine, making it non-SSHable). Their jobs will be queued for execution with Ray.
Here, it is recommended to start Ray in sudo mode, so that it gets special permissions to access the entire machine's RAM.
You need to first setup two directories for Ray to use:
```
sudo -i 
mkdir -p /tmp/ray/
mkdir -p /tmp/ray_client/  ## For client-side Ray connections by your users.
## Makes client files accessible to everyone now and in the future:
chmod 777 -R /tmp/ray_client/
chmod 1777 /tmp/ray_client/
```
`/tmp/ray/` and `/tmp/ray_client/` are cleaned up automatically on reboot and periodically.

Then, as a one-time activity, you need to increase the limits on open files or you may get "Too many open files" OS errors:
```
sudo -i
## Backup current limits
cp /etc/security/limits.conf /etc/security/limits.conf.backup
## As per https://discuss.ray.io/t/setting-ulimits-on-ec2-instances/590 
## Also see https://superuser.com/a/1027505 about wildcard(*) vs root
echo "* soft nofile 65535" >> /etc/security/limits.conf
echo "* hard nofile 65535" >> /etc/security/limits.conf
echo "root soft nofile 65535" >> /etc/security/limits.conf
echo "root hard nofile 65535" >> /etc/security/limits.conf

echo 'ulimit -n 65535' >> ~/.bashrc  ## OR whatever you use: ~/.zshrc, ~/.bash_profile, etc. This loads them when logging in.
### Logout of sudo, then login to check changes:
exit
sudo -i
ulimit -a  ## "open files" should be 65535
```

(Repeatable) Then you run the following ray command on the JupyterHub machine using sudo:
```
sudo -i 
source /home/ubuntu/.bashrc
conda activate common_env_with_ray  ## This conda environment should have ray and ray[client] installed.
clear && ray stop --force && ray stop --force && sleep 5 && mkdir -p /tmp/ray/ && rm -rf /tmp/ray/* && rm -rf /tmp/tmp*.partd && mkdir -p /dev/shm/ray/ && rm -rf /dev/shm/ray/* && ray start --head --system-config='{"object_spilling_config":"{\"type\":\"filesystem\",\"params\":{\"directory_path\":\"/dev/shm/ray\"}}"}'
```
(Repeatable) To connect to this Ray cluster you can use the following code in your Jupyter notebook:

```python
import ray
# from ray.util.dask import enable_dask_on_ray  # Optional: for Dask on Ray   
from pprint import pprint
ray.shutdown()  # Cleans up any pending Ray connections from a kernel restart
pprint(ray.init(
    address='ray://127.0.0.1:10001',
    ignore_reinit_error=True,
    # log_to_driver=True, # Optional: for more verbose logging
    _temp_dir='/tmp/ray_client/',
    include_dashboard=False,
    # Optional: if you want to use any local Python modules which are not installed
    # on the Ray cluster (e.g. custom libraries you have written), you can add them here.
    # runtime_env={"py_modules": [  
    #     <any local Python modules you want to use on the Ray cluster>
    # ]},
))
# enable_dask_on_ray()  #  Optional: for Dask on Ray
pprint(ray.cluster_resources())
```


