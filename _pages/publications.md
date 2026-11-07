---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
description: "Peer-reviewed publications by Abhishek Divekar at AAAI, EMNLP, ACL workshops and IEEE venues, plus papers at Amazon's internal Machine Learning Conference."
---

{% include base_path %}

Full, live citation counts are on [Google Scholar]({{ site.data.profile.google_scholar }}). Each entry below lists the venue, track, presentation type, published acceptance rate, and my role on the paper.

## Peer-reviewed conference papers

{% assign pubs = site.publications | sort: "date" | reverse %}
{% for post in pubs %}{% if post.tier == "peer-reviewed" %}
  {% include archive-single-publication.html %}
{% endif %}{% endfor %}

## Peer-reviewed workshop papers

{% for post in pubs %}{% if post.tier == "peer-reviewed-workshop" %}
  {% include archive-single-publication.html %}
{% endif %}{% endfor %}

## Amazon Machine Learning Conference (internal, peer-reviewed)

AMLC is Amazon's annual internal machine learning conference, with roughly 1,000 submissions per year ([public announcement](https://www.amazon.science/videos-webinars/amazons-annual-machine-learning-conference-featured-presentations-from-thought-leaders-within-academia)). Full texts are internal; abstracts are below.

{% for post in pubs %}{% if post.tier == "internal" %}
  {% include archive-single-publication.html %}
{% endif %}{% endfor %}
