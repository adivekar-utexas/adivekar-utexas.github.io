---
title: "Doing an MS Thesis While Working Full-Time as an ML Scientist"
description: "What it was really like to do an NLP thesis at UT Austin during 2023 while working full-time at Amazon, and why I would do it again."
date: 2023-12-15
tags: [research, career, education]
canonical_url: "https://gist.github.com/adivekar-utexas/7eb8d78b61de5a12b23dd4dd4b9db9a4"
---

<p class="post-origin">Written in December 2023 for <a href="https://mscshub.com/">MSCS Hub</a>; republished as a <a href="https://gist.github.com/adivekar-utexas/7eb8d78b61de5a12b23dd4dd4b9db9a4">GitHub gist</a> in April 2025, with an update from November 2024.</p>


Background: I work as an ML Scientist at FAANG. I started the UT Austin MSCSO program in Fall'2020, and this review was written in Dec'2023. 
This review is very specific, so a motivated person can probably find me. Let me save you the trouble, here is my LinkedIn: linkedin.com/in/ardivekar/ . Feel free to reach out with questions. I'm usually also on the MSCSO Slack.

I applied for UT Austin's MSCS Thesis in Dec'2022, and completed the Thesis over 3 semesters (Spring'23 to Spring'24). 
My thesis was in the NLP domain, during 2023 when AI went mainstream via ChatGPT, and new LLMs were released every single week. As you can expect, this makes my experience unique. But I expect everyone's thesis experience will be unique since it depends on your personal strengths and interests.

Another thing which I did different from other students is that I framed my own research problem. This is recommended only if you're really dead-set on one idea, like I was. Otherwise it's okay to go with an idea your Thesis advisor gives you. But make sure you're eventually doing your own research, not just contributing to someone else's project.

I've written about the process I followed to reach out to MS thesis professors. I've tried to put this together in a step-by-step fashion, starting from the very basics: [How to reach out to professors for an MS thesis (PDF)](/files/work-with-professors.pdf).

If you have questions on the steps to find an advisor, please [reach out to me on LinkedIn](https://linkedin.com/in/ardivekar/).

----

This is in response to a question on UT Austin MSCSO Slack #thesis-option, posted in 2024.

Q: "What are the pros and cons of doing a thesis?". 

A: Personally, I've grown a lot as a researcher, both in skills and temperament.

I was an industry researcher before the thesis, and had published ML papers internally (at Amazon we have an annual internal conference with ~1k submissions and acceptance rate of ~30%). I felt like I knew what I was doing, and the thesis would be a breeze. But I had never had the perspective of academic research, where you pit your ideas against the very best work. My thesis also focuses on LLMs, where the "best" changed weekly in 2023.

The last year (2023) has been very humbling. I feel like I better understand what NLP research is about, and the challenges. My advisor is very good, but at the end its up to me to do the work and push forward the ideas I think are best. This has led me to learn a lot of skills, like how to read a lot of papers fast, how to strategically cut corners to get useful experimental results, and how to orchestrate code which runs LLMs in parallel on a 100+ GPU cluster.

As to cons? Well, like I said it can feel humbling. The thesis itself is a long grind which does not always produce results.
For example, imagine you and your advisor agree that in 2 weeks, you should get results for one set of experiments. You quickly realize 2 weeks is quite a short time to implement this fairly complex idea. But you have to get it done, so you ignore calls from your spouse, push deadlines at work, and hack till 4am at night. And finally, your experiment runs and you get some results. But they are not good results...not enough to publish.

So, you pivot and try a variation of the experiment. This also does not work. In a panic you read a lot of the research papers, and you get some new ideas but you also get the feeling like people have been doing work which is much more in-depth than your own experiments.

You pivot your approach and try again, and again, for 3 months. At the end, you've built an excel table of results from many, many variations of the same core idea. But none of the results are strongly positive, and you aren't sure why (was it a code bug? data not good enough? issue with analysis metric? so many options...). Your advisor was initially excited about your project, but now seems less excited and is trying not to show it.

At this point, your self-confidence has been steadily taking a beating for 3 months. You feel like your ideas are not good, that you are stupid, and (most importantly) that you've wasted time which you and your advisor could have given to something more productive or enjoyable.

This is the reality of doing research. To continue pushing forward, you have to be very motivated by the idea you are working on, or just be bull-headed enough (or desperate enough) that you keep working on it regardless.

At different points in time I have experienced all these feelings. What set me straight was, after one set of failed experiments, I attended ACL conference. ACL is the top NLP conference in the world, and in 2023 it was attended by true experts: I saw Geoff Hinton in-person, delivering the keynote (where he was publicly criticized by Emily Bender). I sat next to Chris Manning at a talk, and rode an elevator with Luke Zettlemoyer. I met a director at FAIR from whom I heard about LLaMa-2 a week before it was launched.

But what stuck with me was the vibe. I did not see the bravado and showmanship you get at tech conferences. Everyone here (especially the students) were aware that they did not know some ultimate truth about NLP; they had just explored an idea, sometimes for years, and found something interesting to show. Some of the presentations were very under-whelming and barely seemed like a contribution, but they were being projected to everyone on a 50-foot screen. Most of the authors were nerds (with various levels of grooming) who stammered occasionally, but were excited about their findings; it was impossible to feel intimidated by them.

I left with the impression that while some of the research I saw was truly very deep, most research is ordinary. And thus, I felt confident that with effort and guidance, I could at least produce "ordinary" work (as per the caliber of a conference like ACL). And that hopefully someday, with enough effort and some luck, I might produce very deep work. 

The Thesis is the journey which facilitates that feeling.

EDIT Nov 2024: this story has a happy ending. After 1.5 years of work, the paper resulting from my thesis was accepted at EMNLP 2024 Main (a top-tier NLP venue). You can read the paper here: https://aclanthology.org/2024.emnlp-main.1071/ 

