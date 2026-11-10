---
layout: section
title: "Research"
permalink: /research/
redirect_from:
  - /publications/
  - /impact/
description: "Research by Abhishek Divekar: papers at NeurIPS, AAAI, EMNLP and ACL workshops, research deployed in Amazon products, and open-source software."
lede: "LLM evaluation, synthetic data, red-teaming LLMs and multimodal agents for science. Live citation counts are on [Google Scholar](https://scholar.google.com/citations?user=1Sf2oM4AAAAJ)."
tabs:
  - {label: "Conference papers", href: "#conference-papers"}
  - {label: "Workshop papers", href: "#workshop-papers"}
  - {label: "Amazon conference", href: "#amazon-machine-learning-conference"}
  - {label: "In production", href: "#research-in-production"}
  - {label: "Open source", href: "#open-source-software"}
---

{% include base_path %}

<p class="section-note">* equal contribution. Bold marks my name.</p>

{% assign pubs = site.publications | sort: "date" | reverse %}

<h2 id="conference-papers">Conference papers</h2>

<ul class="ptable wide">
{% for pub in pubs %}{% if pub.tier == "peer-reviewed" %}{% include paper-row.html pub=pub %}{% endif %}{% endfor %}
</ul>

<h2 id="workshop-papers">Workshop papers</h2>

<ul class="ptable wide">
{% for pub in pubs %}{% if pub.tier == "peer-reviewed-workshop" %}{% include paper-row.html pub=pub %}{% endif %}{% endfor %}
</ul>

<h2 id="amazon-machine-learning-conference">Amazon Machine Learning Conference</h2>

AMLC is Amazon's annual internal machine learning conference, with roughly 1,000 submissions per year ([public announcement](https://www.amazon.science/videos-webinars/amazons-annual-machine-learning-conference-featured-presentations-from-thought-leaders-within-academia)). Full texts are internal; each paper's page has the abstract.

<ul class="ptable wide">
{% for pub in pubs %}{% if pub.tier == "internal" %}{% include paper-row.html pub=pub %}{% endif %}{% endfor %}
</ul>

## Research in production

**AutoML for product classification at Amazon (2019–2023).** Lead science contributor to an internal AutoML platform (Entity Prediction Service) that has deployed 1,000+ ML models across 14 Amazon websites and updated more than 1 billion product attributes. My scientific contributions added over USD 550 million to Amazon's revenue between 2021 and 2026, including for businesses such as Subscribe & Save. Related work: [EPS (AMLC 2020)](/publication/2020-09-01-eps-paper), [DRiP (AMLC 2021)](/publication/2021-09-01-drip-paper), and talks at [Amazon Research Days 2021](/speaking/) and [AIMLSys 2022](/speaking/).

**Amazon Rufus India (2024).** Helped launch Rufus, Amazon's LLM-powered shopping assistant, in India, where it is used by more than 100 million customers. Led red-teaming of the assistant against India-specific compliance policies for consumer safety.

**Code in production.** About 650,000 lines of code shipped to production at Amazon.

**LLM evaluation with few human labels.** [PRECISE (AAAI 2026)](/publication/precise) estimates ranking metrics such as Precision@K from as few as 100 human-annotated queries plus LLM judgments, correcting for LLM-judge bias.

## External adoption

- My cost-constrained AutoML work was adopted in [AutoGluon's `infer_limit` feature](https://auto.gluon.ai/0.4.0/tutorials/tabular_prediction/tabular-indepth.html#inference-speed-as-a-fit-constraint) for inference-speed-constrained model selection.

## Open-source software

| Project | What it does | Links |
|---|---|---|
| SynthesizRR | Retrieval-augmented synthetic dataset generation (EMNLP 2024) | [GitHub](https://github.com/amazon-science/synthesizrr) |
| Concurry | Scaling AI research and production workloads in Python | [Docs](https://amazon-science.github.io/concurry/) · [GitHub](https://github.com/adivekar-utexas/concurry) |
| FMCore | Running GenAI models at every scale and modality | [GitHub](https://github.com/adivekar-utexas/fmcore) |
| Bears | Dataframe sharding, streaming and processing for ML | [GitHub](https://github.com/adivekar-utexas/bears) |
| When Gradients Collide | Code and results for multi-objective prompt optimization of LLM judges (ACL 2026 workshop) | [GitHub](https://github.com/adivekar-utexas/when-gradients-collide) · [Project page](https://textgrad-failure-modes.github.io/) |

I led the open-sourcing of FMCore, Bears and Concurry on Amazon Science.

## Collaborations

- **NSF-Simons AI Institute for Cosmic Origins (CosmicAI)**, Research Collaborator (since February 2025). Developing LLM and vision-language-model frameworks for astronomical modeling within the Institute's "Explorable Universe" project, with researchers at UT Austin, NYU and UCLA. First output: [VESTA (NeurIPS 2026)](/publication/vesta).
