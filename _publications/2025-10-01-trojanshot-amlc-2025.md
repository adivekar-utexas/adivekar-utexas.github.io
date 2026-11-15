---
title: "TrojanShot: One Learned Example Can Red-Team and Guard Large Language Models"
collection: publications
tier: "internal"
urlslug: "trojanshot-amlc-2025"
permalink: /publication/trojanshot
date: 2025-10-01
venue: "Amazon Machine Learning Conference (AMLC 2025), Main track"
venue_short: "AMLC 2025"
paperurl: "(internal)"
acceptancerate: "10%"
acceptancetype: "Oral"
thumb: 'trojanshot.jpg'
excerpt: "LLM-based applications increasingly rely on models served through third-party providers, where the model's own alignment is often the sole defense against misuse. In this regime, developers must implement both red-teaming and guardrails themselves, yet existing in-context methods address these objectives in isolation and do not refine demonstrations against the target LLM's responses. We propose TrojanShot, a unified framework that post-trains a demonstration generator via reinforcement learning to produce potent in-context examples for both attack (Trojan shots) and defense (Guardian shots), operating entirely at the prompt layer of the target LLM. On AdvBench, a single Trojan shot reaches 80.6% ASR on Mistral-7B, and averaged across four datasets TrojanShot exceeds 256-shot Many-Shot Jailbreaking by 14.6 p.p. while preserving human-readable prompts; ablations show RL post-training is the dominant factor in demonstration quality, with the untrained generator already surpassing 1-shot ICA. We demonstrate strong transferability, with a trojan-attacker trained on Mistral-7B reaching 81.2% ASR on Llama-3-70B, exceeding the 69.9% of an attacker trained on Llama-3-8B. Guardian shots reduce TrojanShot's own ASR by 48.9 p.p. with helpfulness within 1.1 p.p. of the undefended model. Our results hold for models whose intrinsic alignment is the primary defense."
thumb_alt: "TrojanShot training loop: a demonstration generator is refined with reinforcement learning against a target LLM and a judge, producing Trojan shots for attack and Guardian shots for defense."
role: "Co-first author (equal contribution)"
citation: '<u>Abhishek Divekar</u>* and Vijit Malik*. <b>&quot;TrojanShot: One Learned Example Can Red-Team and Guard Large Language Models&quot;</b>. <i>Amazon Machine Learning Conference (AMLC 2025)</i>. (*equal contribution)'
pitch: "A single learned in-context example can both red-team and guardrail large language models."
---
