---
permalink: /
layout: home
title: "Abhishek Divekar"
seo_title: "Abhishek Divekar - [[TITLE]] at Amazon (LLM Evaluation, Synthetic Data, AI Agents)"
excerpt: "AI researcher at Amazon working on LLM evaluation, synthetic data and AI agents for science. First-author papers at NeurIPS 2026, CIKM 2026, ACL 2026, AAAI 2026 and EMNLP 2024. Chair of the IOAI² AI Models Track (IOAI 2026)."
description: "Abhishek Divekar is a [[TITLE]] at Amazon working on LLM evaluation (LLM-as-a-Judge), synthetic data generation, red-teaming and guarding LLMs, and multimodal agents for science."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
{% include base_path %}
{% capture jobtitle %}{% include jobtitle %}{% endcapture %}
{% include home/hero.html jobtitle=jobtitle %}
{% include home/news.html %}
{% comment %}
  Section bar. If you add, rename or remove a tab here, update three places:
  (1) the matching section include below, (2) the anchor id on that section,
  (3) the /section-name/ redirect stub in _pages/redirect-*.html.
{% endcomment %}
<nav class="tabbar tabbar--home" aria-label="Sections">
  <a class="tab" href="#history">Career</a>
  <a class="tab" href="#publications">Publications</a>
  <a class="tab" href="#shipped">Product launches</a>
  <a class="tab" href="#ioai">AI Olympiad</a>
  <a class="tab" href="#open-source">Open source</a>
  <a class="tab" href="#awards">Awards</a>
  <a class="tab" href="#press">Press &amp; Media</a>
  <a class="tab" href="#service">Service</a>
</nav>
{% include home/history.html %}
{% include home/papers.html %}
{% include home/production.html %}
{% include home/ioai.html %}
{% include home/oss.html %}
{% include home/press.html %}
{% include home/service.html %}
<script src="{{ base_path }}/assets/js/home.js" defer></script>
