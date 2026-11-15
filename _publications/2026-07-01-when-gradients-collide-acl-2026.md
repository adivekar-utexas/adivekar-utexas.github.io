---
title: "When Gradients Collide: Failure Modes of Multi-Objective Prompt Optimization for LLM Judges"
collection: publications
urlslug: "when-gradients-collide-acl-2026"
permalink: /publication/when-gradients-collide
external: true
tier: "peer-reviewed-workshop"
date: 2026-07-01
venue: 'CustomNLP4U Workshop at the Annual Meeting of the Association for Computational Linguistics (ACL 2026)'
venue_short: 'ACL 2026 (CustomNLP4U Workshop)'
acceptancetype: 'Poster'
paperurl: 'https://arxiv.org/abs/2605.26046'
codeurl: 'https://github.com/adivekar-utexas/when-gradients-collide'
projecturl: 'https://textgrad-failure-modes.github.io/'
role: 'Co-first author (equal contribution); research lead and corresponding author'
citation: 'Parth Darshan* and <u>Abhishek Divekar</u>*. <b>&quot;When Gradients Collide: Failure Modes of Multi-Objective Prompt Optimization for LLM Judges&quot;</b>. <i>CustomNLP4U Workshop, ACL 2026</i>'
bibtex: |
  @inproceedings{darshan-divekar-2026-gradients,
    title = {When Gradients Collide: Failure Modes of Multi-Objective Prompt Optimization for LLM Judges},
    author = {Darshan, Parth and Divekar, Abhishek},
    editor = {Mysore, Sheshera and Kumar, Sachin and Balachandran, Vidhisha and Hayati, Shirley Anugrah and Brahman, Faeze and Moussa, Hanane Nour and Salemi, Alireza},
    booktitle = {Proceedings of the Second Workshop on Customizable NLP: Progress and Challenges in Customizing NLP for a Domain, Application, Group, or Individual (CustomNLP4U)},
    month = jul,
    year = {2026},
    address = {San Diego, California, USA},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2026.customnlp4u-1.21/},
    doi = {10.18653/v1/2026.customnlp4u-1.21},
    pages = {216-228},
    ISBN = {979-8-89176-396-8},
    abstract = {Customizing an LLM judge to a specific task or domain often involves optimizing its prompt across multiple evaluation criteria simultaneously. Textual gradient methods automate this for a single judge criterion, however they produce natural-language critiques, not numerical vectors. Thus, the conflict-resolution toolkit of multi-task learning (PCGrad, MGDA) doesn't apply to the multi-objective textual gradient setting. We test five decomposition modes of textual gradient optimizers by varying how much cross-task information the loss, gradient and optimizer LLMs share. In 6 of 10 configurations on SummEval, we observe that optimization never improves over the initial prompt. Gradient specificity drops by 59% (from 9.0 to 3.7) when the gradient LLM processes multiple criteria jointly. Separately, we observe that naively combining per-task instructions into a single prompt degrades Spearman's rho by -5.3%. These results identify two separable failure modes: optimization-time gradient dilution and inference-time instruction interference, which together constrain the design space for multi-objective judge customization using textual feedback.}
  }
excerpt: 'LLM-as-a-judge pipelines increasingly rely on automatic prompt optimization, where an outer LLM reads textual feedback ("gradients") about an inner judge and rewrites the judge prompt. When the judge scores multiple quality dimensions at once, the optimizer must reconcile several per-task feedback signals into a single revision. We study this multi-objective prompt optimization problem and identify two recurring failure modes. Gradient dilution: concatenating feedback from several tasks into one textual gradient makes the consuming LLM unable to tell which advice applies to which task, dropping gradient task-focus by 59% (9.0 to 3.7 on a 1-to-10 scale). Instruction interference: per-task instructions optimized in isolation interfere when stitched into a single multi-task prompt, degrading test-set Spearman from 0.305 to 0.220. We characterize both failures across four decomposition modes (SSS, SSC, SCC, CCC) on SummEval and BRIGHTER, using TextGrad and OPRO.'
thumb: 'when-gradients-collide.jpg'
thumb_alt: "The multi-objective prompt-optimization loop: an outer LLM reads textual gradients for several objectives and rewrites the judge prompt."
pitch: "Two failure modes of multi-objective prompt optimization for LLM judges: gradient dilution, a 59% specificity drop under joint critique, and instruction interference, a 5.3% Spearman loss."
---
