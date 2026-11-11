---
title: "Statistically Reliable LLM-Based Ranking Evaluation via Prediction-Powered Inference"
collection: publications
urlslug: "precise-gem-acl-2026"
permalink: /publication/precise-gem
external: true
tier: "peer-reviewed-workshop"
date: 2026-06-03
venue: 'GEM Workshop at the Annual Meeting of the Association for Computational Linguistics (ACL 2026)'
venue_short: 'ACL 2026 (GEM Workshop)'
paperurl: 'https://arxiv.org/abs/2606.05308'
role: 'Sole author'
citation: '<u>Abhishek Divekar</u>. <b>&quot;Statistically Reliable LLM-Based Ranking Evaluation via Prediction-Powered Inference&quot;</b>. <i>GEM Workshop, ACL 2026</i>'
excerpt: "With PRECISE, we extended Prediction-Powered Inference to produce bias-corrected estimates of ranking evaluation metrics by combining a small human-labeled set with a large LLM-judged set. PPI is provably unbiased regardless of the LLM judge's error profile. We make it applicable to hierarchical metrics like Precision@K, where annotations are per-document but the metric is per-query, by reducing the output-space computation from O(2^|C|) to O(2^K). On the ESCI benchmark, augmenting 30 human annotations with Claude 3 Sonnet judgments reduces the standard error of Precision@4 estimates from 4.45 to 3.50 (a 21% relative reduction). In a production system, our framework correctly identified the best of three system variants from 100 human labels and 2 hours of domain-expert annotation; A/B testing confirmed this ranking with +407 bps in daily sales."
thumb: 'precise-gem.jpg'
pitch: "Extended abstract of PRECISE: 30 human labels plus LLM judgments cut the standard error of Precision@4 by 21%, and in production the method picked the best of three variants, confirmed by A/B test (+407 bps daily sales)."
---
With PRECISE, we extended Prediction-Powered Inference to produce bias-corrected estimates of ranking evaluation metrics by combining a small human-labeled set with a large LLM-judged set. PPI is provably unbiased regardless of the LLM judge's error profile. We make it applicable to hierarchical metrics like Precision@K, where annotations are per-document but the metric is per-query, by reducing the output-space computation from O(2^|C|) to O(2^K). On the ESCI benchmark, augmenting 30 human annotations with Claude 3 Sonnet judgments reduces the standard error of Precision@4 estimates from 4.45 to 3.50 (a 21% relative reduction). In a production system, our framework correctly identified the best of three system variants from 100 human labels and 2 hours of domain-expert annotation; A/B testing confirmed this ranking with +407 bps in daily sales.
