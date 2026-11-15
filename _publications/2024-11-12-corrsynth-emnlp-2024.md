---
title: "CorrSynth: A Correlated Sampling Method for Diverse Dataset Generation from LLMs"
collection: publications
urlslug: "corrsynth-emnlp-2024"
permalink: /publication/corrsynth
external: true
tier: "peer-reviewed"
date: 2024-11-12
venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP 2024), Main Conference'
venue_short: 'EMNLP 2024 (Main)'
paperurl: 'https://arxiv.org/abs/2411.08553'
acceptancerate: '20.8%'
role: 'Co-first author (equal contribution)'
citation: 'Suhas S Kowshik*, <u>Abhishek Divekar</u>*, and Vijit Malik. <b>&quot;CorrSynth: A Correlated Sampling Method for Diverse Dataset Generation from LLMs&quot;</b>. <i>Conference on Empirical Methods in Natural Language Processing (EMNLP 2024)</i>. (*equal contribution)'
bibtex: |
  @inproceedings{kowshik-etal-2024-corrsynth,
    title = {CorrSynth - A Correlated Sampling Method for Diverse Dataset Generation from LLMs},
    author = {Kowshik, Suhas S and Divekar, Abhishek and Malik, Vijit},
    editor = {Al-Onaizan, Yaser and Bansal, Mohit and Chen, Yun-Nung},
    booktitle = {Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing},
    month = nov,
    year = {2024},
    address = {Miami, Florida, USA},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2024.emnlp-main.899/},
    doi = {10.18653/v1/2024.emnlp-main.899},
    pages = {16076-16095},
    abstract = {Large language models (LLMs) have demonstrated remarkable performance in diverse tasks using zero-shot and few-shot prompting. Even though their capabilities of data synthesis have been studied well in recent years, the generated data suffers from a lack of diversity, less adherence to the prompt, and potential biases that creep into the data from the generator model. In this work, we tackle the challenge of generating datasets with high diversity, upon which a student model is trained for downstream tasks. Taking the route of decoding-time guidance-based approaches, we propose CorrSynth, which generates data that is more diverse and faithful to the input prompt using a correlated sampling strategy. Further, our method overcomes the complexity drawbacks of some other guidance-based techniques like classifier-based guidance. With extensive experiments, we show the effectiveness of our approach and substantiate our claims. In particular, we perform intrinsic evaluation to show the improvements in diversity. Our experiments show that CorrSynth improves both student metrics and intrinsic metrics upon competitive baselines across four datasets, showing the innate advantage of our method.}
  }
excerpt: 'Large language models (LLMs) have demonstrated remarkable performance in diverse tasks using zero-shot and few-shot prompting. Even though their capabilities of data synthesis have been studied well in recent years, the generated data suffers from a lack of diversity, less adherence to the prompt, and potential biases that creep into the data from the generator model. In this work, we tackle the challenge of generating datasets with high diversity, upon which a student model is trained for downstream tasks. Taking the route of decoding-time guidance-based approaches, we propose CorrSynth, which generates data that is more diverse and faithful to the input prompt using a correlated sampling strategy. Further, our method overcomes the complexity drawbacks of some other guidance-based techniques like classifier-based guidance. With extensive experiments, we show the effectiveness of our approach and substantiate our claims. In particular, we perform intrinsic evaluation to show the improvements in diversity. Our experiments show that CorrSynth improves both student metrics and intrinsic metrics upon competitive baselines across four datasets, showing the innate advantage of our method.'
thumb: 'corrsynth.jpg'
thumb_alt: "CorrSynth overview: correlated sampling across prompts and demonstrations, compared with independent few-shot generation."
pitch: "Correlated sampling across generations produces more diverse synthetic datasets from LLMs."
acceptancetype: 'Poster'
---
Large language models (LLMs) have demonstrated remarkable performance in diverse tasks using zero-shot and few-shot prompting. Even though their capabilities of data synthesis have been studied well in recent years, the generated data suffers from a lack of diversity, less adherence to the prompt, and potential biases that creep into the data from the generator model. In this work, we tackle the challenge of generating datasets with high diversity, upon which a student model is trained for downstream tasks. Taking the route of decoding-time guidance-based approaches, we propose CorrSynth, which generates data that is more diverse and faithful to the input prompt using a correlated sampling strategy. Further, our method overcomes the complexity drawbacks of some other guidance-based techniques like classifier-based guidance. With extensive experiments, we show the effectiveness of our approach and substantiate our claims. In particular, we perform intrinsic evaluation to show the improvements in diversity. Our experiments show that CorrSynth improves both student metrics and intrinsic metrics upon competitive baselines across four datasets, showing the innate advantage of our method.
