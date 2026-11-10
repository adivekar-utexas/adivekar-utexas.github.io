---
title: "SynthesizRR: Generating Diverse Datasets with Retrieval Augmentation"
collection: publications
urlslug: "synthesizrr-emnlp-2024"
permalink: /publication/synthesizrr
external: true
tier: "peer-reviewed"
date: 2024-11-12
venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP 2024), Main Conference'
venue_short: 'EMNLP 2024'
paperurl: 'https://arxiv.org/abs/2405.10040'
codeurl: 'https://github.com/amazon-science/synthesizrr'
acceptancerate: '20.8%'
role: 'First author (with Prof. Greg Durrett, UT Austin; MS thesis work)'
citation: '<u>Abhishek Divekar</u> and Greg Durrett. <b>&quot;SynthesizRR: Generating Diverse Datasets with Retrieval Augmentation&quot;</b>. <i>Conference on Empirical Methods in Natural Language Processing (EMNLP 2024)</i>'
excerpt: 'It is often desirable to distill the capabilities of large language models (LLMs) into smaller student models due to compute and memory constraints. One way to do this for classification tasks is via dataset synthesis, which can be accomplished by generating examples of each label from the LLM. Prior approaches to synthesis use few-shot prompting, which relies on the LLM''s parametric knowledge to generate usable examples. However, this leads to issues of repetition, bias towards popular entities, and stylistic differences from human text. In this work, we propose Synthesize by Retrieval and Refinement (SynthesizRR), which uses retrieval augmentation to introduce variety into the dataset synthesis process: as retrieved passages vary, the LLM is "seeded" with different content to generate its examples. We empirically study the synthesis of six datasets, covering topic classification, sentiment analysis, tone detection, and humor, requiring complex synthesis strategies. We find that SynthesizRR greatly improves lexical and semantic diversity, similarity to human-written text, and distillation performance, when compared to 32-shot prompting and four prior approaches.'
thumb: 'synthesizrr.jpg'
pitch: "Retrieval augmentation makes LLM-generated training data more diverse and closer to human-written text."
acceptancetype: 'Poster'
---
