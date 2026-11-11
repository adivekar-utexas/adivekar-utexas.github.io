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
paperurl: 'https://arxiv.org/abs/2605.26046'
codeurl: 'https://github.com/adivekar-utexas/when-gradients-collide'
projecturl: 'https://textgrad-failure-modes.github.io/'
role: 'Senior author (mentored first author Parth Darshan)'
citation: 'Parth Darshan and <u>Abhishek Divekar</u>. <b>&quot;When Gradients Collide: Failure Modes of Multi-Objective Prompt Optimization for LLM Judges&quot;</b>. <i>CustomNLP4U Workshop, ACL 2026</i>'
excerpt: 'LLM-as-a-judge pipelines increasingly rely on automatic prompt optimization, where an outer LLM reads textual feedback ("gradients") about an inner judge and rewrites the judge prompt. When the judge scores multiple quality dimensions at once, the optimizer must reconcile several per-task feedback signals into a single revision. We study this multi-objective prompt optimization problem and identify two recurring failure modes. Gradient dilution: concatenating feedback from several tasks into one textual gradient makes the consuming LLM unable to tell which advice applies to which task, dropping gradient task-focus by 59% (9.0 to 3.7 on a 1-to-10 scale). Instruction interference: per-task instructions optimized in isolation interfere when stitched into a single multi-task prompt, degrading test-set Spearman from 0.305 to 0.220. We characterize both failures across four decomposition modes (SSS, SSC, SCC, CCC) on SummEval and BRIGHTER, using TextGrad and OPRO.'
thumb: 'when-gradients-collide.jpg'
pitch: "Two failure modes of multi-objective prompt optimization for LLM judges: gradient dilution and instruction interference."
---
