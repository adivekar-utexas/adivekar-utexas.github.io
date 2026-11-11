---
title: "TrojanShot: Reinforced Demonstrations Yield Sample-Efficient Jailbreaks and Guardrails for LLMs"
collection: publications
urlslug: "trojanshot-cikm-2026"
permalink: /publication/trojanshot-cikm-2026
external: true
tier: "peer-reviewed"
date: 2026-11-06
venue: 'ACM International Conference on Information and Knowledge Management (CIKM 2026), Rome'
venue_short: 'CIKM 2026 (Research track)'
acceptancetype: 'Poster'
acceptancerate: '26.5%'
paperurl: 'https://dl.acm.org/doi/10.1145/3799682.3841000'
role: 'Co-first author (equal contribution)'
citation: '<u>Abhishek Divekar</u>* and Vijit Malik*. <b>&quot;TrojanShot: Reinforced Demonstrations Yield Sample-Efficient Jailbreaks and Guardrails for LLMs&quot;</b>. <i>Proceedings of the 35th ACM International Conference on Information and Knowledge Management (CIKM 2026)</i>, pp. 1012-1023. (*equal contribution)'
excerpt: "LLM-based applications increasingly rely on models served through third-party providers, where the model's own alignment is often the sole defense against misuse. In this regime, developers must implement both red-teaming and guardrails themselves, yet existing in-context methods address these objectives in isolation and do not refine demonstrations against the target LLM's responses. We propose TrojanShot, a unified framework that post-trains a demonstration generator via reinforcement learning to produce potent in-context examples for both attack (Trojan shots) and defense (Guardian shots), operating entirely at the prompt layer of the target LLM. On AdvBench, a single Trojan shot reaches 80.6% ASR on Mistral-7B, and averaged across four datasets TrojanShot exceeds 256-shot Many-Shot Jailbreaking by 14.6 p.p. while preserving human-readable prompts; ablations show RL post-training is the dominant factor in demonstration quality, with the untrained generator already surpassing 1-shot ICA. We demonstrate strong transferability, with a trojan-attacker trained on Mistral-7B reaching 81.2% ASR on Llama-3-70B, exceeding the 69.9% of an attacker trained on Llama-3-8B. Guardian shots reduce TrojanShot's own ASR by 48.9 p.p. with helpfulness within 1.1 p.p. of the undefended model. Our results hold for models whose intrinsic alignment is the primary defense."
thumb: 'trojanshot.jpg'
pitch: "An RL-trained generator writes one in-context example that jailbreaks an LLM (80.6% attack success on Mistral-7B) or, flipped, guards it, cutting attack success by 48.9 points."
---
LLM-based applications increasingly rely on models served through third-party providers, where the model's own alignment is often the sole defense against misuse. In this regime, developers must implement both red-teaming and guardrails themselves, yet existing in-context methods address these objectives in isolation and do not refine demonstrations against the target LLM's responses. We propose TrojanShot, a unified framework that post-trains a demonstration generator via reinforcement learning to produce potent in-context examples for both attack (Trojan shots) and defense (Guardian shots), operating entirely at the prompt layer of the target LLM. On AdvBench, a single Trojan shot reaches 80.6% ASR on Mistral-7B, and averaged across four datasets TrojanShot exceeds 256-shot Many-Shot Jailbreaking by 14.6 p.p. while preserving human-readable prompts; ablations show RL post-training is the dominant factor in demonstration quality, with the untrained generator already surpassing 1-shot ICA. We demonstrate strong transferability, with a trojan-attacker trained on Mistral-7B reaching 81.2% ASR on Llama-3-70B, exceeding the 69.9% of an attacker trained on Llama-3-8B. Guardian shots reduce TrojanShot's own ASR by 48.9 p.p. with helpfulness within 1.1 p.p. of the undefended model. Our results hold for models whose intrinsic alignment is the primary defense.
