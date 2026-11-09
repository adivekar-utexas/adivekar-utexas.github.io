---
permalink: /
title: "Abhishek Divekar"
seo_title: "Abhishek Divekar - [[TITLE]] at Amazon (LLM Evaluation, Synthetic Data, AI Agents)"
excerpt: "AI researcher at Amazon working on LLM evaluation, synthetic data and AI agents for science. First-author papers at NeurIPS 2026, AAAI 2026 and EMNLP 2024. Chair of the IOAI² AI Models Track (IOAI 2026)."
description: "Abhishek Divekar is a [[TITLE]] at Amazon working on LLM evaluation (LLM-as-a-Judge), synthetic data generation, red-teaming and guarding LLMs, and multimodal agents for science."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}
{% capture jobtitle %}{% include jobtitle %}{% endcapture %}

I am a {{ jobtitle }} at Amazon in . I study how to **evaluate and improve large language models when human labels are scarce**: statistically valid LLM judges, diverse synthetic training data, red-teaming and guarding LLMs, and vision-language agents that do scientific data analysis. My research has been published at NeurIPS, AAAI, EMNLP and ACL workshops, and has shipped in Amazon products used by hundreds of millions of customers.

I chair the [IOAI² AI Models Track](/ioai/) at the International Olympiad in Artificial Intelligence and serve on its International Scientific Committee. In 2025, I was Team Leader of Team India, which won 3 Gold, 2 Silver and 1 Bronze medals at IOAI 2025. I hold an M.S. in Computer Science from UT Austin, advised by [Greg Durrett](https://gregdurrett.github.io/), completed while working full-time at Amazon.

<p class="home-links">[<a href="/cv/">CV</a>] [<a href="{{ site.data.profile.google_scholar }}">Google Scholar</a>] [<a href="https://github.com/adivekar-utexas">GitHub</a>] [<a href="https://www.linkedin.com/in/ardivekar">LinkedIn</a>] [<a href="mailto:{{ site.data.profile.email }}">Email</a>]</p>

## News

<div class="news-feed" tabindex="0" aria-label="News, newest first">
<ul>
{% assign news = site.data.news | sort: "date" | reverse %}
{% for item in news %}
  <li class="news-item">
    <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%b %Y" }}</time>
    <span class="news-tag news-tag--{{ item.tag }}">{{ item.tag }}</span>
    <span class="news-text">{{ item.text | markdownify | remove: "<p>" | remove: "</p>" }}</span>
  </li>
{% endfor %}
</ul>
</div>

## Selected publications

<p class="section-note">* equal contribution. Full list with abstracts on the <a href="/publications/">Publications</a> page.</p>

{% assign pubs = site.publications | sort: "date" | reverse %}
<ul class="pub-list">
{% for post in pubs %}{% if post.tier == "peer-reviewed" or post.tier == "peer-reviewed-workshop" %}
  {% include pub-compact.html %}
{% endif %}{% endfor %}
</ul>

## Service

- **Chair**, IOAI² AI Models Track, International Olympiad in AI 2026; **member**, International Scientific Committee and IOAI Jury.
- **Team Leader**, Team India, IOAI 2025. **Technical Committee**, ACM India AI Olympiad 2025.
- **Area Chair**, Amazon Machine Learning Conference 2025.
- **Reviewer**: ACL, EMNLP, ICLR, AAAI, COLM, WSDM, SIGIR, WWW. **Proposal reviewer**, Amazon Research Awards.
- **Instructor**, Amazon ML Summer School 2022 (~3,000 students). 200+ Applied Scientist interviews at Amazon.

More on the [Service](/service/) page.

<p class="site-note">Opinions on this site are my own and do not reflect the views of my employer. Machine-readable summary: <a href="/llms.txt">llms.txt</a>.</p>
