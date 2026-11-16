---
title: "Squeezing the last DRiP: AutoML for cost-constrained Product classification"
collection: publications
tier: "internal"
urlslug: "drip-paper"
permalink: /publication/2021-09-01-drip-paper
redirect_from:
  - /publication/drip
date: 2021-09-01
venue: 'Amazon Machine Learning Conference (AMLC)'
paperurl: '(internal)'
acceptancerate: '30%'
acceptancetype: 'Poster'
alternativeurl: '<a href="/files/Squeezing_the_last_DRiP_ARD_2021_slides.pdf">Talk at Amazon Research Days 2021</a>'
citation: '<u>Abhishek Divekar</u>*, Gaurav Manchanda*, Prit Raj, Abhishek Das, Karan Tanwar, Akshay Jagatap, Vinayak Puranik, Jagannathan Srinivasan, Ramakrishna Nalam, and Nikhil Rasiwasia. <b>&quot;Squeezing the last DRiP: AutoML for cost-constrained product classification&quot;</b>. <i>9th conference of Amazon Machine Learning (AMLC 2021)</i>'
venue_short: 'AMLC 2021'
contribution: "Co-first author"
pitch: "AutoML that finds high-performing models within an explicit production cost budget, with a cost-performance tradeoff curve."
excerpt: "Recent progress in automated machine learning (AutoML) has shown that both hyperparameter search and stacking models can achieve performance that beats the median Kaggle competitor on standard classification metrics. However, solutions that directly optimize the cost of executing such models with minimal loss of performance have been sparingly explored. Current techniques lack a priori knowledge of the deployment environment and its constraints, such as request batch-size or prediction latency. This affects a critical subset of users: business teams with cost-sensitive use-cases, who cannot meet their goals if an AutoML-suggested model is expensive during training or inference. To bridge this gap, we propose DRiP, a versatile ML framework that encapsulates the phases needed for an automated system to select and iteratively refine candidate models while being constrained by an inference budget. Existing tools have individual capabilities that map to phases in our framework, but lack the overall capability to optimize against such constraints. We present our implementation of this framework as a new AutoML tool. Across 38 product classification datasets and various business use-cases, DRiP obtains 99.96% of the ROC-AUC performance of the best SOTA AutoML systems (AutoGluon and H2O.ai) at 37% of the cost. When tuned to minimize cost, DRiP offers better cost and performance than comparably optimized AutoML systems (average 0.21 ROC-AUC increase at 44% of the cost of distilled AutoGluon). If no cost constraints are imposed, Unrestricted DRiP provides the best overall performance (98.42 ROC-AUC vs 98.18 for the next-best AutoML system). Although we evaluate classification, the framework can optimize any machine learning task with well-defined performance and cost."
thumb: 'drip.jpg'
thumb_alt: "DRiP cost-performance tradeoff curve: ROC-AUC against production cost, with the single-point results of other AutoML systems shown for comparison."
---
