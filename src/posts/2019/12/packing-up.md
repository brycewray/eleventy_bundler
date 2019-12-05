---
layout: layouts/posts/singleposthero.njk
tags: post
title: Packing up
subtitle: Eleventy and webpack are a powerful pair
description: "How using a bundler makes the coolest SSG even better."
date: 2019-12-08T16:35:00-06:00
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

## Bundles of (not) fun

I'd never heard of bundlers in general, or webpack in particular, until a year or so ago; and only in the last couple of months have I begun to "get" the whole point of bundlers. Now I am a firm believer in them. In the next few paragraphs, I'll endeavor to explain their purpose as best I can. I also highly encourage you to read a snappy article by [Victor Zhou](https://victorzhou.com/) called "[Why Webpack? (or, How Not to Serve JavaScript)](https://victorzhou.com/blog/why-you-should-use-webpack/)," which explains all this very, very well *and* entertainingly at the same time. Just as Mr. Zhou did, I will explain bundlers by describing the pains-in-the-fanny which their creators intended that they prevent.

Until not all that many years ago, if you wanted to add JavaScript code to your Web site for whatever interactive jazz you wanted it to do, you'd either link to .js files&nbsp;.&nbsp;.&nbsp;.

```html
<script src="/js/comments-script.js"></script>
<script src="/js/goofy-image-slider.js"></script>
``` 

&nbsp;.&nbsp;.&nbsp;. or put some code right in your HTML&nbsp;.&nbsp;.&nbsp;.

```html
<script type="text/javascript">
	/* some JavaScript would go here */
</script>
<!-- ...followed by some HTML ... -->
<!-- ...and then, maybe, more JS ... -->
<script type="text/javascript">
	/* ...and so on... */
</script>
```

(Back then, you generally needed to specify that a `<script>` tag was introducing JavaScript code. Nowadays, that's assumed.)

In the bad old days before [HTTP/2](https://http2.github.io) became widespread, the `<link>` method, in particular, was something against which Web performance gurus preached because it involved yet one more time-consuming request to the Web server, as if you weren't already making enough requests for images and other assets. One reasonably sized JS file? Fine. But, soon, the typical Web site was loading many JS files per page. Especially as smartphones came into the picture with their then-limited connectivity speeds, it became even clearer this wouldn't fly.

A popular way around this problem was *concatenating* and *minifying* JS files. You'd take your twelve or fourteen files and cram 'em together into one file while also eliminating comments, line breaks, and any other items not utterly necessary for the code to run.[^spaces] Now you'd be down to just one server call for that one big JS file.

Good to go, right? Well, not quite.

What if File Eight and File Twelve each want to have a variable named `event1`---but meaning two totally different things? That wouldn't work. In the same file (not to mention the same computer RAM), each variable would have to have a *unique* name. How would *you* like to go back through a megabyte's worth of code---or more---and have to make sure no two variables had the same names?

In addition to these problems, there also was the issue of managing *dependencies*. Regardless of whether they were concatenated, different sections of code often needed other sections to run in specific sequences: *e.g.*, your home page's image "slider" JS file couldn't run until after a different JS file that enabled the "slider" even to appear in the first place, and at the same time it also had to appear *before* yet another JS file that put some additional cuteness on the screen on top of the sliding images. As with the unique-variable-name issue, managing dependencies was not so big a deal with a small number of files, but a huge pain as the code grew.

[^spaces]: Minifying, in particular, is useful for much code at the production level. All the pretty space that humans like to use in *writing* code helps us *read* it, but browsers don't care. So what you often see in source code---what appears to be a mashed-up mess---probably started out in the *development* phase as very nicely formatted, well-commented stuff.

What to do?

## Task runners

[Grunt and Gulp and the like]

## Bundlers

A

So, that explains bundlers. (I hope.) Now, where was I? Oh, yeah&nbsp;.&nbsp;.&nbsp;.

## Purple, but no passion

A few weeks ago, I [told you](/posts/2019/10/now-gatsby-geezer) I had managed at last to get this site up and running on [Gatsby](https://gatsbyjs.org) after [multiple](/posts/2019/07/why-staying-with-hugo) [tries](/posts/2019/07/lessons-learned) and considerable [angst](/posts/2019/09/why-left-hugo-eleventy).

For a few days, I reveled in the fact that I, a person who really doesn't know that much about the [React](https://reactjs.org) JavaScript library on which Gatsby depends, had managed to overcome this "great rebeccapurple whale." However, I soon realized to my surprise that I wasn't satisfied. The feeling of triumph grew stale. I felt a distinct sense of "Okay, fine; **now** what?!" It was as if I'd climbed Everest, looked around for a minute, and said, "*So?!?*"

You perhaps got a hint of that in my [recent "Mixed nuts" observation](/posts/2019/11/mixed-nuts-2019-11):

> Although this site's been on Gatsby for a few weeks now, I still admire Eleventy, which is just plain fun to use. Still, Gatsby's image processing, seamless use of webpack, and staggering array of plugins are keeping me with it. For now.

When I wrote that and saw it on the screen, it was the first time I'd put together these feelings of vague dissatisfaction into more than just a brooding presence in the back of my mind.

This also dovetailed with my increasing realization, over the months working with Gatsby, of just how much of that product's power comes from webpack. Don't get me wrong: Gatsby has plenty of "secret sauce" on its own. Still, if you had spent as much time dealing with Gatsby, looking at the source code it produces, and reading in detail about how it works as I have done in the last half-year, you'd have soon grasped that webpack is an inescapable part of what makes Gatsby go.[^CRA]

[^CRA]: Same is true for [Create React App](https://create-react-app.dev), for that matter, but that's a completely different subject.

So, I began to wonder, what if I could learn to use Eleventy with a bundler? Eleventy by itself is pretty cool---but, with a bundler, too&nbsp;.&nbsp;.&nbsp;.?

## Part and Parcel

[Some words about why I didn't go with the easier Parcel.]

A

## A leg up

[Some words about how the months of futzing with configuring Gatsby had given me a "tough skin" when it came to dealing with webpack.]

A

## Triumph

A [From below]

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