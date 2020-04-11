---
layout: layouts/posts/singlepost.11ty.js
tags: post
title: "Two cheers for Tailwind"
subtitle: "Staying current can bite"
description: "Trying to decide what I think about utility-first CSS."
author: Bryce Wray
date: 2020-01-12T11:00:00-06:00
lastmod: 2020-01-18T12:36:00-06:00
discussionId: "2020-01-two-cheers-tailwind"
---

<div class="yellowBox">
	<p><em><strong>Update, 2020-01-18</strong>:</em><br />
	<em>You&rsquo;ll quickly notice that I&rsquo;m not wildly enthusiastic about the subject of this piece, which will make the newly added ending more understandable. Hint,&nbsp;hint.</em></p>
</div>

A couple of weekends ago, I tweeted a question for the Web devs among my few but greatly appreciated Twitter followers. It was the Saturday between Christmas and New Year's, so I figured I'd be fortunate if I got a handful of responses.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Reading about <a href="https://twitter.com/tailwindcss?ref_src=twsrc%5Etfw">@tailwindcss</a> and other <a href="https://twitter.com/hashtag/atomicCSS?src=hash&amp;ref_src=twsrc%5Etfw">#atomicCSS</a> approaches (<a href="https://twitter.com/tachyons_css?ref_src=twsrc%5Etfw">@tachyons_css</a>, <a href="https://twitter.com/basscss?ref_src=twsrc%5Etfw">@basscss</a> , etc.). They seem aimed at the multi-project, multi-dev use case. But what if it’s just one personal Web site with one maintainer (HTML and CSS)? Worth it then?</p>&mdash; Bryce Wray (@BryceWrayTX) <a href="https://twitter.com/BryceWrayTX/status/1210975092999704578?ref_src=twsrc%5Etfw">December 28, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Then it got retweeted by the [Tailwind CSS](https://tailwindcss.com) [Twitter account](https://twitter.com/tailwindcss) and, well, my phone was pretty actively "bink"-ing at me for a few hours thereafter.

Tens of thousands of "[impressions](https://help.twitter.com/en/managing-your-account/using-the-tweet-activity-dashboard)" and a few dozen mostly enthusiastic answers later, I had a pretty clear, albeit obviously biased, direction&nbsp;.&nbsp;.&nbsp;.

*Yeah, man, go for it*.

So I spent my spare time during the next few days doing precisely that on a branch of my site and, during the first afternoon of 2020, merged that branch into `Master` and pushed it to Netlify:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Another holiday, another site spruce-up. Decided to go the <a href="https://twitter.com/tailwindcss?ref_src=twsrc%5Etfw">@tailwindcss</a> route, as recommended by so many this past weekend — and, while at it, also made long-overdue changes to improve readability (I hope). Opinions welcome. Be nice. 😄<a href="https://t.co/wB96VIVOLn">https://t.co/wB96VIVOLn</a></p>&mdash; Bryce Wray (@BryceWrayTX) <a href="https://twitter.com/BryceWrayTX/status/1212496201385418753?ref_src=twsrc%5Etfw">January 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Not a purist

Although I still haven't quite gotten used to the appearance of this *[utility-first](https://tailwindcss.com/docs/utility-first/)* approach to CSS in my HTML&nbsp;.&nbsp;.&nbsp;.

```html
<div class="absolute bottom-0 text-shadow-titles sm:px-20 md:px-30 lg:px-36 pt-6 gradient-titles w-full min-w-full">
```

.&nbsp;.&nbsp;.&nbsp; *i.e.*, as opposed to previous styling for that same `div`:

```html
<div class="background-hero-title-block-fit">
```

.&nbsp;.&nbsp;.&nbsp; the truth is that, apparently, I've been writing at least some form of utility-first CSS well before it received that name and *certainly* well before the ongoing industry infighting over whether it's the Greatest Thing Evah, an unforgivable sin against the holy of holies, or something in between.

In 2002, I began using CSS for the first time, but this was before [CSS Zen Garden](https://en.wikipedia.org/wiki/CSS_Zen_Garden)---of which, to be honest, I never learned until many years later---and those whom it inspired carved out what was supposed to be a hard line between content (HTML) and that content's appearance (CSS). No, I blithely was occasionally doing nasty things like the following when I just didn't want to go through the rigamarole.

First, the CSS:

```css
.ctr {
	text-align: center;
}

h2.h2big {
	font-size: 3rem;
}

.darkBlue {
	color: #00000a1;
}
```


And then the HTML:

```html

<h2 class="ctr h2big darkBlue">
	My big not-H1 headline that I want to be dark blue
</h2>

```

What I'm saying, then, is that any concerns I have about this approach definitely are *not* from the standpoint of being a warrior for purity. On this issue, I have zero credibility in that regard.

## Oh, the utility

I guess what still mainly bugs me is the whole idea of whether, specifically for an [SSG](https://staticgen.com)-built site like mine that depends so heavily on a small number of [templates](https://www.11ty.dev/docs/templates/), I might not be better off just going back to a less utilitarian method. Am I really gaining anything from this build-the-appearance-one-Lego-block-at-a-time approach? Would I be wiser just to revert to the way I was doing it before?

By the way: no matter which way I go, a reversion to my previous workflow probably *wouldn't* mean going back to SASS/SCSS, which I jettisoned in the transition to utility-first. To learn how to use Tailwind CSS, I also had to learn about using [PostCSS](https://postcss.org). It's clear that, even I do go back to a less utilitarian approach, PostCSS and its [plugins](https://www.postcss.parts) can do everything, and more, for which I used SASS/SCSS. In fact, what PostCSS enables is pretty frickin' amazing. Just being able to take what starts out in dev mode as 2.4&nbsp;**MB** of CSS (more than half of which is related to using Web "fonts," I should note in all fairness) and end up with it in production mode at only about 7&nbsp;**K** is impressive, to put it mildly.

## We Shall See<sup style="font-size: 0.5em; font-weight: normal; vertical-align: baseline; position: relative; top: -1.1em; margin-right: -1em;">&trade;</sup>---as usual

As I observed near the end of my [last post](/posts/2019/12/sorta-strange-ssg-trip), this site's [Eleventy](https://11ty.dev)/[webpack](https://webpack.js.org) combo gives me a solid foundation on which to build. And, on the subject I've discussed here today, it further shows how easily I can try new stuff.

.&nbsp;.&nbsp;. Or not.

One aspect I have to keep in mind is, as I often mention in these posts, my wish to stay current with whatever New Hotness exists in Web dev. Mind you, I won't *adopt* it all, but I do want to *know* about it. The question I must now resolve regarding utility-first CSS is whether I can know enough about it without actually using it.

That remains TBD.

Finally, here are the best from among the many articles I've been reading (often, several times) recently while considering all this stuff:

- "[CSS Utility Classes and 'Separation of Concerns'](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)" by Adam Wathan, the creator of Tailwind CSS.
- "[In Defense of Utility-first CSS](https://frontstuff.io/in-defense-of-utility-first-css)" by Sarah Dayan.
- "[A Year of Utility Classes](https://css-irl.info/a-year-of-utility-classes/)" by Michelle Barker.
- "[The Perils of Functional CSS](https://www.browserlondon.com/blog/2019/06/10/functional-css-perils/)" by Jay Freestone.
- "[Utility First and CSS Components: A Reconciliation](https://regisphilibert.com/note/utility-class-css-components-reconciled/)" by Regis Philibert.
- "[Use Tailwind or Roll Your Own CSS Utility Library?](https://blog.bitsrc.io/use-tailwind-or-roll-your-own-css-utility-library-fdaa89659117)" by Oliver Williams.
- "[In Defense of Functional CSS](https://critter.blog/2018/06/08/in-defense-of-functional-css/)" by Mike Crittenden.
- "[Why I Haven't Jumped on the Tailwind CSS Bandwagon](https://block81.com/blog/why-i-havent-jumped-on-the-tailwind-css-bandwagon)" by Angie Herrera.


<hr style="margin-bottom: 1em;" />

## *Update, 2020-01-18*

After a few days of mulling this over as well as re-reading a lot of stuff about what ordinary CSS can do these days, especially in league with PostCSS and the appropriate set of PostCSS plugins, I concluded I'd return to CSS Grid.[^TWCSSG]

[^TWCSSG]: I did see a few days ago that [Tailwind CSS will soon include CSS Grid support](https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0-canary.4), which is definitely a good and overdue move; but it didn't change my mind.

However, as I hinted above would be the case were I to eschew the utility-first approach, I opted *not* to return to SASS/SCSS.

Why?

Because I wanted to start doing CSS the right way, so to speak, rather than continuing to use the shortcuts in SASS/SCSS methods. This is not out of any masochistic tendencies (I think), but because "regular" CSS, and *non-obsolete* browsers' support for it, is getting better all the time and that's where the action is.

I *won't* try to tell you that it was easy to take my previous SCSS and convert it to CSS that PostCSS can [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) to browser-friendly CSS. Quite frankly, using SASS/SCSS left me with some bad habits, like nesting media queries inside selectors. And even if somewhere there *is* a PostCSS way to get around things like that: well, I don't care, now.[^elevwp]

[^elevwp]: Thank goodness for my [Eleventy/webpack setup](/posts/2019/12/packing-up), without which the whole process of reversion would've been much more onerous. I shudder to think about, say, if I'd still been on [Gatsby](/posts/2019/10/now-gatsby-geezer).

Don't get me wrong. I do understand that there definitely are cases to be made for utility-based CSS, especially---as I tweeted back on December 28---for multi-dev shops. I just don't believe my little one-man, one-approver Web site qualifies as a good example of such a case.

And, more to the point: I just like this way better and, unlike so many other things in my life, this is one situation where I get to make the final call.