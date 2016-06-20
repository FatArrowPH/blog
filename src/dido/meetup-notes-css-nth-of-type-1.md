---
title: CSS:nth-of-type(1) Meetup Notes
slug: meetup-notes-nth-of-type-1
date: 2016-06-20
excerpt: >
    Manila Web Makers CSS:nth-of-type(1) Meetup Notes
---

The [Manila Web Makers](https://www.facebook.com/groups/ManilaWebMakers/) held its first meetup on May 13, 2016. Organizing and hosting meetups is a new thing for us at Fat Arrow and it's something we'd love to do regularly. We learned quite a bit from the experience which I'll detail in a different post. This one is about the talks.

[Videos of the talks](https://www.youtube.com/playlist?list=PL5UP8m7CWd08jLCCzvdT-oYa4CzjOnLvt) are up on [Fat Arrow's YouTube channel](https://www.youtube.com/channel/UCVMVBMlcmWoT73arv_D_Ocw). _The video of [Karlo Abapo's talk](#context-driven-testing) is still in post-production. I'll update this post and the playlist once it's done. Check back again soon._ We had two scheduled talks by Jerico Aragon and Datu Arellano and an improptu lightning talk by Karlo Abapo. Read on for the videos and a few of my notes on each.


## My Journey to the Perfect CSS Preprocessor
Jerico Aragon, Senior Web Developer and Solutions Architect at Netfluence Corporation, shared his thoughts and experience in choosing which CSS pre-processor to adopt.

He has experimented with LESS, Sass, and Stylus and cautions against getting too caught up in the power that they provide. He calls out nested selectors as [one of the many pitfalls of CSS pre-processors](http://thesassway.com/beginner/the-inception-rule#css-selector-nightmare).

Jerico argues that, in the end, the choice is not that big of a deal. Pre-processors help you solve particular pain points in vanilla CSS but they won't guarantee a good architecture, which is the bigger issue with medium to large code bases.

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/96yjFEw7vq4" frameborder="0" allowfullscreen></iframe>
</div>


## Cubic Bezi... Yey!
Datu Arellano, co-founder and instructor at Fat Arrow, clued us in on the `cubic-bezier` CSS function.

He broke down the syntax of the function and visually demonstrated how each argument affects the animation. He also showed how the presets convert into their `cubic-bezier` form. I don't get much opportunity to use this function as, more often than not, I just use the presets or the defaults. With a new-found appreciation for timing functions and UI animation in general, I might play around with `cubic-bezier` in my next project.

To close his talk, Datu shared the importance of animation for user interfaces and some best practices from [Google's Material Design](https://material.google.com/motion/material-motion.html) and [Apple's Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Animation.html#//apple_ref/doc/uid/TP40006556-CH57-SW1).

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/wZRcrZeuj_I" frameborder="0" allowfullscreen></iframe>
</div>


## Context Driven Testing
Karlo Abapo, Quality Assurance Manager at YOYO Holdings, gave an improptu talk on the context driven approach to testing software.

As Karlo discussed the principles of [context-driven testing](http://context-driven-testing.com/), it brought to mind the [Agile Manifesto](http://www.agilemanifesto.org/). While context-driven testing is not a part of Agile nor can it be called Agile testing, their principles seem roughly analogous. And, from a high-level perspective, both advocate for adaptive rather than rigid processes.
