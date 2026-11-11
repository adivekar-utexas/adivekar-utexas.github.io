---
layout: section
title: "Curriculum Vitae"
permalink: /curriculum-vitae/
sitemap: true
description: "Curriculum vitae of Abhishek Divekar: [[TITLE]] at Amazon; M.S. Computer Science, UT Austin."
lede: "Education, experience, service and publications."
tabs:
  - {label: "Education", href: "#education"}
  - {label: "Experience", href: "#professional-experience"}
  - {label: "Service", href: "#professional-service"}
  - {label: "Honors", href: "#honors"}
  - {label: "Publications", href: "#publications"}
  - {label: "Talks", href: "#talks"}
---

{% include base_path %}

<p class="section-note">A PDF version is on the <a href="/cv/">CV page</a>.</p>

## Education

- **M.S. in Computer Science (Thesis track), The University of Texas at Austin**, Aug 2020 to May 2024.
  - Thesis advisor: Prof. Greg Durrett. Thesis work on diverse synthetic dataset generation with retrieval augmentation, published at EMNLP 2024.
- **B.Tech. in Information Technology, Veermata Jijabai Technological Institute (VJTI), Mumbai**, 2013 to 2017.
  - Research Assistant in Prof. Mahesh Shirole's lab (anomaly-based network intrusion detection); first-author paper at IEEE ICCCS 2018.

## Professional experience

- **{% include jobtitle %} (L6), Amazon**. Dec 2021 to present.
  - Lead research and applied-science projects tracked at VP and SVP level, and advise teams across Amazon businesses. Scientific contributions added USD 550M+ to Amazon revenue (2021 to 2026).
  - Red-teaming lead for India-specific compliance policies for the India launch of Amazon Rufus, an LLM-powered shopping assistant used by 100M+ customers.
  - First-author papers at NeurIPS 2026, CIKM 2026, AAAI 2026 (oral) and EMNLP 2024 (two papers), and orals at the Amazon Machine Learning Conference 2024 and 2025.
- **Research Collaborator, NSF-Simons AI Institute for Cosmic Origins (CosmicAI)**. Feb 2025 to present.
  - LLM and vision-language-model agents for astronomical modeling in the "Explorable Universe" project, with UT Austin, NYU and UCLA ([VESTA, NeurIPS 2026](/#vesta-neurips-2026)).
- **Applied Scientist II, Amazon, India Machine Learning**. Oct 2019 to Nov 2021.
  - Designed and implemented data-processing nodes (160K lines of Python) for an AutoML platform that deployed 1,000+ models across 14 Amazon websites.
  - BERT-based product classification into 10,000+ categories: accuracy improved from 62% to 69% over a multi-task FastText baseline.
  - Batch prediction for ~500M products; depth-first preprocessing reduced latency by 30-50%.
- **Software Development Engineer, Amazon (Kindle and Payments)**. Jul 2017 to Sep 2019.
  - Multi-device purchase flow for Kindle devices in Europe; REST APIs for a Tier-1 payments service, with 25% lower API latency.
- **Software Development Intern, Barclays**, Pune. May to Jul 2016.

## Professional service

- Chair, IOAI² AI Models Track, International Olympiad in Artificial Intelligence (IOAI 2026); member of the International Scientific Committee and the IOAI Jury (IOAI 2026). Lead author, [IOAI² 2026 Inaugural Edition Review](https://ioai-official.org/ai-models-track/ioai%C2%B2-2026-report/).
- Team Leader, Team India, IOAI 2025 (3 Gold, 2 Silver, 1 Bronze; [results](https://ioai-official.org/china-2025/results-2025/)).

## Honors

- Top 7 GenAI Scientists in India, Analytics Vidhya AV Luminary Awards, DataHack Summit 2025.
- Winner (out of 300 participants), Amazon Machine Learning Challenge, Chennai, 2017.
- Area Chair, Amazon Machine Learning Conference 2025.
- Reviewer / PC member: ACL, EMNLP, ICLR, AAAI, COLM, WSDM, SIGIR, WWW.
- Proposal reviewer, Amazon Research Awards (AWS Agentic AI CFP, Fall 2025).
- Technical Committee member, ACM India AI Olympiad (INAIO 2025).
- 200+ interviews for Applied Scientist roles at Amazon.

## Publications

See the [homepage](/#publications) for abstracts, acceptance rates and roles.

<ul>{% assign pubs = site.publications | where_exp: "p", "p.listed != false" | sort: "date" | reverse %}{% for post in pubs %}
  {% include archive-single-short-publication.html %}
{% endfor %}</ul>

## Talks

<ul>{% assign talks = site.talks | sort: "date" | reverse %}{% for post in talks %}
  {% include archive-single-short-talk.html %}
{% endfor %}</ul>

## Skills

- **Research:** LLM post-training, LLM-as-a-Judge evaluation, synthetic data generation, red-teaming, retrieval-augmented generation, AutoML.
- **Programming:** Python (primary), Java, C++, SQL.
- **Languages:** English, Hindi.
