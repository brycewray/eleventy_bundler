---
layout: layouts/posts/singleposthero.njk
tags: post
title: Packing up
subtitle: Eleventy and webpack are a powerful pair
description: "How using a bundler makes the coolest SSG even better."
date: 2019-12-06T16:35:00-06:00
#lastmod: t/k
discussionId: "2019-12-packing-up"
idx: 40
featured_image: /images/chain-11ty-webpack-3867751_1920x1080-1920.jpg
featured_image_alt: "Eleventy and webpack logos over a chain"
featured_image_caption: "Images: 11ty.io; webpackjs.org; Pixabay"
---

It's that time again, [static site generator](https://staticgen.com) (SSG) nerdiness fans. Yes, that's right, it's time for me to geek out about another change to this site.

Hello? Is this thing on? *[crickets]*

Well, for those of you still in the room: bear with me, because there's a story here even if you're not at all into building Web sites. It's about helping a good product built by a [good person](https://www.zachleat.com) get even better.

Still, for those who are edging toward the exits, I won't [bury the lede](https://style.mla.org/dont-bury-the-lede/): I found a way to come back to my favorite SSG, [Eleventy](https://11ty.org). But, mind you, this is Eleventy on steroids, with added awesomeness that *bundler* software--- specifically, [webpack](https://webpackjs.org)---makes possible.

I know some of this (all of this?) is Greek to some of you. I'll try to fix that.

## Purple, but no passion

A few weeks ago, I [told you](/posts/2019/10/now-gatsby-geezer) I had managed at last to get this site up and running on [Gatsby](https://gatsbyjs.org) after [multiple](/posts/2019/07/why-staying-with-hugo) [tries](/posts/2019/09/why-left-hugo-eleventy) and [angst].

For a few days, I reveled in the fact that I, a person who really doesn't know that much about the [React](https://reactjs.org) JavaScript library on which Gatsby depends, had managed to overcome this "great rebeccapurple whale." However, I soon realized to my surprise that I wasn't satisfied. The feeling of triumph grew stale. I felt a distinct sense of "Okay, fine; **now** what?!"

## !!!---Stuff not to forget...---!!!

- Image processing in general---Big improvement in delivered files' sizes despite virtually imperceptible difference in images' quality
- LQIP in particular (work in progress re background images)
- SCSS/SASS
- Relative ease of using NPM packages in general (especially vs. separate JS files)---Recalling @zachleat comments about NodeJS
- Web "fonts" via Kyle Matthews's NPM Typefaces package in particular (despite earlier indications about system "fonts")
- Faster build time vs. Gatsby
- Eleventy/webpack combo provides things not available if one uses either without the other
	- Easier and more flexible templating (Eleventy)
	- Easier integration of third-party JS (webpack)
	- All the benefits of bundling (**obviously** webpack)

## !!!---Ending section---!!!

Although I have never been adept at dealing with mechanical, much to my wife's chagrin when things need fixing around our aging home, I *do* like to tinker. Only thing is, what I like tinkering with is: code that makes Web pages work.

In fact, not long ago, our company owner asked a group of us about our hobbies. The others mentioned normal, human things like dancing, mountain-climbing, and playing or watching various sports.[^sports] Then, he got to me. I had to be the group nerd who admitted that mine is very similar to what I do for pay. So I guess I'm the proverbial "[dull boy](https://en.wikipedia.org/wiki/All_work_and_no_play_makes_Jack_a_dull_boy)," which will shock absolutely no one who knows me.

[^sports]: And, hey, I like watching sports, too. As I type these particular words, I have not one but *two* browser windows open showing me streams of NFL games---although, similar to what I [mentioned](/posts/2019/11/mixed-nuts-2019-11) recently, they're serving as background noise than anything else at the moment.

That said, this tendency can come in handy. What you're seeing now is proof.