---
title: "Amazon Engineer to ML Scientist: Notes on a 2-Year Journey of Growth"
description: "How I moved from software engineering to Applied Science at Amazon without a Masters or PhD: personal investment, ML skills, knowing the job, and learning to be a scientist."
date: 2021-12-09
tags: [career, machine-learning, research]
canonical_url: "https://medium.com/@ardivekar/engineer-to-ml-scientist-notes-on-a-2-year-journey-of-growth-ed4d16d22044"
---

<p class="post-origin">Originally published on <a href="https://medium.com/@ardivekar/engineer-to-ml-scientist-notes-on-a-2-year-journey-of-growth-ed4d16d22044">Medium</a> on 9 December 2021.</p>

As of this week, [I’m officially a Machine Learning Scientist](https://www.linkedin.com/in/ardivekar) (technically, an Applied Scientist, which is equivalent here at Amazon). This is the culmination of a journey which started ~2 years ago, when I was fortunate enough to join an all-Scientist team at Amazon’s India ML research department, despite being a Software Engineer at the time.
People regularly inquire how I made this move (I don’t have a Masters or a PhD), and they express similar ambitions to work in Applied ML or ML research. This post is my response; it details the key insights and suggestions which helped me realize my goal. If you are considering a similar switch in your career, I hope my words are able to help you. These opinions are my own and do not reflect the views of my employer.
There are four broad aspects which were considerations during my switch: **Personal Investment** , **Developing ML skills, Knowing the Job, and Learning How to be a Scientist.**

---

## Personal Investment
### Recognize the opportunity
Before moving to the ML department, I had worked as a Software Development Engineer (SDE) for ~2 years. I had a few big launches, and was up for promotion. However, I had grown tired of working in software, when Machine Learning seemed much more interesting, dynamic, and meritocratic.
Around this time, there was an internal opening for a “Research Engineer”: a hybrid between an SDE and Scientist. I reached out. Four interviews later, I was presented an offer…at my current level. This meant I potentially had to throw away ~2 years of career growth as an SDE. After a bout of indecision, I realized that __**_I could always go back to my previous job if I failed_** ; this convinced me that making the switch was worthwhile.
I will say that I was fortunate enough to not have a family to support or loans to repay; I might have made a different decision in those cases.
### Have people who support your journey
Outside of my family, my manager Nikhil Rasiwasia and many peers helped me succeed. External validation of your progress is not necessary, but it helps a lot! The journey is long, and the support helps you stay on track.

---

## Developing ML Skills
### Gain an in-depth understanding of Machine Learning
Take graduate-level courses (Intermediate/Expert on Coursera), actually make notes and solve **_all_** the exercises. Be a nerd. This is hard to do when juggling work deadlines, but if you want to be a scientist and not an engineer, there is no replacement.
I personally joined [UT Austin’s part-time Masters program](https://www.cs.utexas.edu/graduate-program/masters-program/online-option/); the fixed syllabus and peer-pressure helped me learn. I’m half-done with the program…compared to when I started, my comprehension of ML fundamentals is much deeper than I thought was possible. **_Really digging into the math of ML is a game-changer_**.
Speaking of math, blogs and Reddit posts that discuss “how to break into ML” often repeat the following:
> “The math you need for ML is Probability, Linear Algebra and Calculus” - Internet
While this is not **_un_** true, it’s much more accurate to say:
> “The math you need for Machine Learning is 50% Probability, 35% Linear Algebra and 15% Calculus”
Probability really is the language of Machine Learning. **_Work hard on your probability skills and a lot of the literature becomes much easier to digest_**. I found “[Introduction to Probability](https://projects.iq.harvard.edu/stat110/home)” by Blitzstein and Hwang an extremely approachable introduction to all the major concepts.
At the same time, **you should know how probability and linear algebra intersect** (e.g. Expectation of random vectors) and **how calculus and linear algebra intersect** (e.g. Gradients, Hessians, Jacobians); a lot of the advanced math involves these intersections.
### Get good at Deep Learning (and other popular tools)
If I had to estimate, Deep Learning models are used for ~70% of applied ML projects. It’s not hype any more, and entire departments are organized around this. However, **_don’t let this be the only ML technique you are familiar with_**. There are times when a Deep Learning model will lose to a “classic” ML technique like XGBoost, either in terms of ML performance or computational cost; in those cases, you can’t shrug your shoulders and apologize.
### There are a few topics every Scientist is familiar with; learn these as soon as possible
Generally, these topics are part of the syllabus of a graduate-level ML course like [Stanford’s CS 229](http://cs229.stanford.edu/syllabus.html). Books I found useful to learn these topics include:
  * “[Understanding Machine Learning: from Theory to Algorithms](https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/)” by Shalev-Shwartz and Ben-David (Free, medium-difficulty, medium-depth)
  * “[Pattern Recognition And Machine Learning](https://link.springer.com/book/9780387310732)” by Bishop (medium-difficulty, high-depth)
  * “[Machine Learning - A Probabilistic Perspective](https://www.cs.ubc.ca/~murphyk/MLbook/)” by Murphy (Free, high-difficulty, high-depth)
  * “[An Introduction to Statistical Learning (with Applications in R)](https://www.statlearning.com/)” by James, Witten, Hastie and Tibshirani (Free, low-difficulty, low-depth)
  * “[The Elements of Statistical Learning](https://link.springer.com/book/10.1007/978-0-387-84858-7)” by Hastie, Tibshirani, Friedman (Free, high-difficulty, high-depth)

For every topic, look among these books (and others) for an explanation which you find most digestible. **_Write it down in your notes._** You can also get a lot out of ML class-notes from university professors, [like this](https://www.stat.cmu.edu/~ryantibs/advmethods/notes/).
### Conference papers are functionally similar to news articles; you will only understand them if you’re up-to-date with the story so far.
**_When introduced to a new area, do not read conference papers first_** ; instead, start with recent survey papers or (if needed) a good book on the fundamentals of that area. Blogs can be good, particularly if the author is a scientist and not someone learning ML themselves (as these tend to be over-simplified).

---

## Knowing the Job
### Figure out what job you _really_ want.
I can’t stress this enough, but **_to work as a scientist, you should be interested in ML for reasons beyond money and because it’s “cool”_**. If those are your primary motivations, consider Machine Learning engineering or Data engineering; the pay is similar (higher, sometimes), and you play with ML models without dissecting research papers and running endless experiments. Your career growth will also be more predictable, since it won’t be tied to the whims of peer-reviewers. Cassie Kozykrov has a [superb article](https://towardsdatascience.com/data-sciences-most-misunderstood-hero-2705da366f40) on the competencies of different ML roles, give it a read to figure out which one suits you.
### “Applied” Science is not just research
Half the job is delivering models into production, and the other half is research. You typically work on projects which are meaningful to the business either immediately or as a long-term investment. The first type are more impactful, while the second type are more “research”-y. Both kinds of projects are important to be a well-rounded Applied Scientist. **_Attending talks, reading and presenting research papers, reading and presenting business documents, writing code, running experiments, and plotting results forms the bulk of the day-to-day work._**

### Learn from your peers
Machine Learning is a vast discipline and no one is an expert (or even familiar) with everything. I noticed my Scientist peers were well-versed with one or two ML domains (NLP, CV, recommendations, etc), but had depth only in a few sub-areas. They also varied very widely in terms of age, and years-of-experience was no real indicator of their level.
Something I found very refreshing was that junior scientists were often asked to present their work, and were treated with respect (this is not very common in academia, as I understand).
### Be nice to the engineers!
Often, building the model is the most painless part of the project; plugging it into existing systems with the right guarantees of input data, latency, scalability, etc can be extremely challenging. ML/Data engineers are the ones who take ownership of this task; that makes them equally important contributors to the success of an Applied ML project. Treat it as a symbiotic relationship.
### Pick your problems carefully
Some problems can’t be solved with ML. Some problems can be solved by ML, but it’s overkill. Maintaining ML models is a boatload of manual work, as their performance actually degrades if you leave them idle for months or years. If the most effective solve is a piece of code which takes the data and produces an output “prediction”, it’s up to you to communicate this to stakeholders.

---

## Learning how to be a Scientist
### Differentiate science and engineering work
**_Scientific research is extremely different from engineering work_**. The motivations are different (contribute to common knowledge, vs. business impact), the success criterion are different (paper accepted by a small group of experts, vs. deploy a feature for millions of users), the artifacts are different (8-page PDF you will forget immediately after you publish, vs. code which needs to be maintained for years to come), the usage of prior work is different (must be novel, vs. re-use as much as possible)…the list goes on.
In retrospect, this is an area where I could not self-start. If I was not working with scientists who taught me the ropes, I would probably have gone back to academia to learn how to do high-quality scientific work. I don’t have many suggestions here, except to find a similar environment either in industry or academia. The [articles on Scribbr](https://www.scribbr.com/dissertation/literature-review/) are a good starting point if you are brand new to scientific research and need to learn the terminology.
### Get a research mentor
Every ML domain does research “differently”. There are different benchmark datasets and different standards for publication. For an extreme example, take a look at the differences between accepted papers at [ICML 2021](https://icml.cc/Conferences/2021/Schedule?type=Poster), [ACL 2021](https://2021.aclweb.org/program/accept/), and [COLT 2021](http://learningtheory.org/colt2021/accepted.html), three undoubtedly top-tier conferences in different research areas. ACL leans towards empirical results, whereas COLT is pure theory, and ICML is somewhere in between. All are “Top-tier ML conferences”, but they barely speak the same language.
As an inexperienced researcher, you will not know these idiosyncrasies, and it’s possible to waste months with rejected publications because you didn’t tailor your paper to follow the unspoken “rules" of that research area.
In these cases, it is invaluable to have access to a senior researcher (someone who is an expert in the domain) to help navigate that world. The issue, of course, is that such people are few and far between. The only way to have access to them is to join a reputable lab (either in industry or academia) as an intern/other junior role. This is an ugly fact about ML research, and raises the barrier of entry into the field.
### Focus on reading only relevant papers
Because of the volume of new ML papers, it is important to learn how to selectively read papers that are relevant to you ([this article is a great tutorial](http://ccr.sigcomm.org/online/files/p83-keshavA.pdf)). When you do so, you’ll notice that most papers you come across are just not relevant to your work. Also, many newly-proposed techniques only work in specific settings that they were developed to solve. **_Really great papers can be identified by popularity (citation count, awards), novelty of the ideas, or consolidation of many ideas in the domain_.**
### You don’t need to be an expert to contribute to the State-of-the-art
I was hesitant about writing papers on topics I was new to...what if I got an important concept wrong and made a fool of myself?
  * In this regard, I’ve found [the advice of the late Steven Weinberg](https://www.nature.com/articles/426389a.pdf) very motivational. To paraphrase, **_the first step to doing good research, is doing okay research and asking an expert to review it_**. So don’t be afraid about putting out research to the best of your ability! Processes like peer-review are meant to give feedback on work which does not meet the bar.
  * Additionally, **_your research ideas do not need to be complicated; they must be novel and your experiments must rigorously show that they work_.** A lot of problems cannot be solved with simpler techniques, which is why things like the LSTM and Transformer exist. However, have you heard of K-fold cross-validation? It’s a simple, extremely popular idea which greatly improves the generalization performance of ML models. Focus on results, not complexity.

### Get your experiments right
**_Test your ideas as fast as humanly possible_** _;_ as a scientist, this is the main way to measure how productive you are on a day-to-day basis.
But **_be careful about what your experiments are actually measuring_**. “Experimental design” is a whole field, and unlike writing code, there is an unambiguously “right” and “wrong” way to run experiments. When in doubt, ask someone to review your experimental methodology _before_ spending the time to generate results.
### Writing papers teaches you the tricks of the trade
Once you start writing papers, you will realize a few truths about scientific writing:
  * Papers are difficult to read because (a) they try to condense a huge amount of information into a limited space, which not everyone is good at; (b) authors try to sound professional even when discussing very simple ideas.
  * **_The paper you are currently reading is derived from the ideas of one or two cited papers…figure out which ones those are and read them if needed._**
  * None of the authors have read _all_ the research papers that they are citing in detail. A lot of citations are meant to establish background knowledge about the problem or “obvious” facts in the domain. If a large percentage of these facts are new information to you, then take a step back and learn the background first.

### Focus on how - and where - you present your work
  * **_The impact of your ideas is highly dependent on how well you communicate them, particularly in written form_**(papers, technical documents, etc). If your English skills are poor, work to improve them: “[The Elements of Style](https://www.amazon.in/Elements-Style-William-Strunk-Jr/dp/020530902X)” by Strunk and White is a classic reference.
  * **_The selectivity of the venue where you publish is a yardstick for the quality of the work you are capable of producing._** One paper in a Tier-1 conference is worth more than 3-4 papers at Tier-3 conferences.

There’s a lot of things this article has not covered…as I mentioned, it’s a journey which contains a lot of “small” realizations about yourself and the field. However, I hope this provides some insight on the important part of this journey. Good luck!
