# Repo for brycewray.com

This is the repository from which the [Eleventy](https://11ty.dev)- and [webpack](https://webpack.js.org)-generated version of [brycewray.com](https://brycewray.com) is built.

## Not a starter kit, but&nbsp;.&nbsp;.&nbsp;.

While this is the actual site&rsquo;s repo rather than a starter version thereof, you can turn it into the latter by doing the following:

1. Clone it to a local repo.
2. Make appropriate changes to the `_data` directory&rsquo;s files.
3. Delete from `src` the Markdown files and images (well, maybe you should keep one or two of each around at the start, until you see how things work).

I chose to build this site with [Nunjucks](https://mozilla.github.io/nunjucks/) templates after converting its content from the [Go](https://golang.org)-based [Hugo](https://gohugo.io) and the [React](https://reactjs.org)-based [Gatsby](https://gatsbyjs.org); but Eleventy itself is [extremely flexible](https://www.11ty.dev/docs/languages/) in that regard, so go with what you prefer. [If you‘re interested in JavaScript templates (.11ty.js), I strongly suggest you check the [amazingly well-documented example](https://gitlab.com/reubenlillie/reubenlillie.com) of [Reuben Lillie‘s site](https://reuvenlillie.com).]

## What&rsquo;s under the hood

This isn&rsquo;t a complete list but, rather, covers only the biggies. Check out `package.json` for the whole shebang.

- Eleventy and webpack, of course, outfitted with a number of plugins that are probably self-explanatory once you see them in `package.json`.
- [lazysizes](https://github.com/aFarkas/lazysizes) (and several of its plugins), [responsive-loader](https://github.com/herrstucki/responsive-loader), and a variety of [imagemin](https://github.com/imagemin/imagemin)-related items for processing the few images on the site.
- [typefaces](https://github.com/kyleamathews/typefaces), through which I&rsquo;m using the [Public Sans](https://public-sans.digital.gov) Web &ldquo;[font](https://brycewray.com/posts/2018/10/web-typography-part-2/)&rdquo; for all non-code text and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) for code and code blocks.
- [Browsersync](https://browsersync.io)&mdash;Although Eleventy comes with Browsersync for Eleventy-only use (*i.e.*, if you **weren&rsquo;t** using it with a bundler, as I am here with webpack), I use a separate Browsersync instance for the `testbuild` script (see &ldquo;Scripts in `package.json`&rdquo;). **Note**: I have Browsersync&rsquo;s usually-on [ghost mode](https://browsersync.io/docs/options#option-ghostMode) turned **off** because it creeps me out 🙂 when I&rsquo;m testing locally; you, however, might prefer the default &ldquo;on&rdquo; setting.
- [PostCSS](https://postcss.org) for, among other things, transpiling my CSS for easier consumption — even for obsolete browsers (looking at you, IE).

## Scripts in `package.json`

- `test`&mdash;The standard script that comes with an `npm init`; I just leave it there even though I never use it. [YMMV](https://www.urbandictionary.com/define.php?term=ymmv).
- `clean`&mdash;Used in several other scripts to delete the `_site` directory on each run (dev or production), so you&rsquo;re always looking at the latest.
- `start`&mdash;**This is the basic dev mode command** (`npm run start`). It deletes `site` and then runs the next two scripts together in parallel.
- `dev:eleventy`&mdash;Tells Eleventy this is dev mode and to check constantly for changes to content that it handles&mdash;which, in this config, is only the template material and Markdown.
- `dev:modewebpack`&mdash;Tells webpack this is dev mode, for which it should use `webpack.dev.js` (as well as, always, `webpack.common.js`), and to check constantly for changes to items that it handles&mdash;which, in this config, are CSS and JS.
- `build`&mdash;**This is the basic production mode command** (`npm run build`) and is what I set Netlify to use in deploying from `_site`. This script deletes `_site` and then runs the next two scripts in parallel. There&rsquo;s no server functionality here, since this is **just** for production mode. (For an alternative that lets you check production build quality during dev mode, see `testbuild` further down.)
- `prod:eleventy`&mdash;Tells Eleventy this is production mode and to output files to `_site`.
- `prod:webpack`&mdash;Tells webpack this is production mode, for which it should use `webpack.prod.js` (as well as, always, `webpack.common.js`).
- `bsprod`&mdash;See the next item, `testbuild`.
- `testbuild`&mdash;This may be overkill, but I don&rsquo;t want to have to deploy to Netlify to see whether there are notable differences between what I get in dev mode and what I get in production mode (I found that happened when I was getting accustomed to PurgeCSS, which I have since ceased using because I got tired of having to tell it to `ignore` needed code). Thus, this script works like the `build` script **but** *also* uses `bsprod` to run a *separate* instance of Browsersync to let you view it in your dev environment, whereupon you can confirm that everything&rsquo;s fine before actually deploying to your hosting platform. **Obviously, this is** ***not*** **for actual production** (*e.g.*, **never** make this **the** build command on that hosting platform). As you can suspect, this can tax your local computer pretty heavily; the more cores and RAM you can throw at it, the better.

## Questions?

I don&rsquo;t claim to be an expert on **any** of this stuff&mdash;as even a casual reading of the site itself, not to mention this repo&rsquo;s contents, probably will demonstrate pretty quickly&mdash;but, if you have any questions about this repo, create an [issue](https://github.com/brycewray/eleventy_bundler/issues) or contact me via either [Twitter](https://twitter.com/BryceWrayTX) or [email](mailto:bw@brycewray.com). I can&rsquo;t promise the answers will be that great, but I&rsquo;ll do my best to help. Others have helped me greatly in my attempts at site-building, so I want to &ldquo;pay it forward,&rdquo; as the saying goes.

## Interested in other SSGs?

For those interested in other static site generators, I have also created [Gatsby](https://gatsbyjs.org)- and [Hugo](https://gohugo.io)-based versions of this repo which also are now public. For more information, see “[Different modes for different code](https://brycewray.com/posts/2020/04/different-modes-different-code).” As for the repo links themselves:

- [Gatsby version](https://github.com/brycewray/gatsby_site_css-grid)
- [Hugo version](https://github.com/brycewray/hugo_site_css-grid)