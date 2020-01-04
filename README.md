# Repo for brycewray.com

This is the repository from which the [Eleventy](https://11ty.dev)- and [webpack](https://webpack.js.org)-generated version of [brycewray.com](https://brycewray.com) is built.

## Not a starter kit, but&nbsp;.&nbsp;.&nbsp;.

While this is the actual site's repo rather than a starter version thereof, you can turn it into the latter by doing the following:

1. Clone it to a local repo.
2. Make appropriate changes to the `_data` directory's files.
3. Delete from `src` the Markdown files and images (well, maybe you should keep one or two of each around at the start, until you see how things work).

I chose to build this site with [Nunjucks](https://mozilla.github.io/nunjucks/) templates after converting its content from the [Go](https://golang.org)-based [Hugo](https://gohugo.io) and the [React](https://reactjs.org)-based [Gatsby](https://gatsbyjs.org); but Eleventy itself is [extremely flexible](https://www.11ty.dev/docs/languages/) in that regard, so go with what you prefer.

## What's under the hood

This isn't a complete list but, rather, covers only the biggies. Check out `package.json` for the whole shebang.

- Eleventy and webpack, of course, outfitted with a number of plugins that are probably self-explanatory once you see them in `package.json`.
- [lazysizes](https://github.com/aFarkas/lazysizes) (and several of its plugins), [responsive-loader](https://github.com/herrstucki/responsive-loader), and [sharp](https://github.com/lovell/sharp) for image processing.
- [typefaces](https://github.com/kyleamathews/typefaces), through which I'm using: the [Public Sans](https://public-sans.digital.gov) "[font](https://brycewray.com/posts/2018/10/web-typography-part-2/)" for all non-code text; and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) for code and code blocks.
- [Browsersync](https://browsersync.io)---Although Eleventy comes with Browsersync for Eleventy-only use (*i.e.*, if you **weren't** using it with a bundler, as I am here with webpack), I use a separate Browsersync instance for the `testbuild` script (see "Scripts in `package.json`"). **Note**: I have Browsersync's usually-on [ghost mode](https://browsersync.io/docs/options#option-ghostMode) turned **off** because it creeps me out 🙂 when I'm testing locally; you, however, might prefer the default "on" setting.
- [PostCSS](https://postcss.org), used mainly for:
	- [Tailwind CSS](https://tailwindcss.com). You'll still see vestiges of pre-Tailwind CSS here and there in the site---it was formerly based on [SCSS](https://sass-lang.com/documentation/syntax) and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)---but, for the most part, this is now a [utility-first CSS](https://frontstuff.io/in-defense-of-utility-first-css) site.
	- [PurgeCSS](https://www.purgecss.com)---Without this, you **really** don't want to use Tailwind. My dev-mode CSS file is 2.5&nbsp;**MB** (much of which, to be fair to Tailwind since it [shouldn't be nearly that big on its own](https://tailwindcss.com/docs/controlling-file-size/), is due to those Web "fonts"); but, in production, especially after Netlify GZIPs it, it's only about 7.3&nbsp;**K**. Whoa. *(Even just locally*---i.e., *without GZIPping happening---when I'm using that `testbuild` script you see mentioned in "Scripts in `package.json`, PurgeCSS cuts it down from 2.5&nbsp;MB to about 23&nbsp;KB.)* PurgeCSS is the [bariatric surgeon](https://en.wikipedia.org/wiki/Bariatric_surgery) of CSS.
	- [Autoprefixer](https://github.com/postcss/autoprefixer).

## Scripts in `package.json`

- `test`---The standard script that comes with an `npm init`; I just leave it there even though I never use it. [YMMV](https://www.urbandictionary.com/define.php?term=ymmv).
- `clean`---Used in several other scripts to delete the `_site` directory on each run (dev or production), so you're always looking at the latest.
- `start`---**This is the basic dev mode command** (`npm run start`). It deletes `site` and then runs the next two scripts together in parallel.
- `dev:eleventy`---Tells Eleventy this is dev mode and to check constantly for changes to content that it handles---which, in this config, is only the template material and Markdown.
- `dev:modewebpack`---Tells webpack this is dev mode, for which it should use `webpack.dev.js` (as well as, always, `webpack.common.js`), and to check constantly for changes to items that it handles---which, in this config, are CSS and JS.
- `build`---**This is the basic production mode command** (`npm run build`) and is what I set [Netlify](https://netlify.com) to use in deploying from `_site`. This script deletes `_site` and then runs the next two scripts in parallel. There's no server functionality here, since this is **just** for production mode. (For an alternative that lets you check production build quality during dev mode, see `testbuild` further down.)
- `prod:eleventy`---Tells Eleventy this is production mode and to output files to `_site`.
- `prod:webpack`---Tells webpack this is production mode, for which it should use `webpack.prod.js` (as well as, always, `webpack.common.js`).
- `bsprod`---See the next item, `testbuild`.
- `testbuild`---This may be overkill, but I don't want to have to deploy to Netlify to see whether there are notable differences between what I get in dev mode and what I get in production mode (I found that happened when I was getting accustomed to PurgeCSS). Thus, this script works like the `build` script **but** *also* uses `bsprod` to run a *separate* instance of Browsersync to let you view it in your dev environment, whereupon you can confirm that everything's fine before actually deploying to your hosting platform. **Obviously, this is** ***not*** **for actual production** (*e.g.*, **never** make this **the** build command on that hosting platform). As you can suspect, this can tax your local computer pretty heavily; the more cores and RAM you can throw at it, the better.

## Questions?

I don't claim to be an expert on **any** of this stuff---as even a casual reading of the site itself, not to mention this repo's contents, probably will demonstrate pretty quickly---but, if you have any questions about this repo, create an [issue](https://github.com/brycewray/eleventy_bundler/issues) or contact me via either [Twitter](https://twitter.com/BryceWrayTX) or [email](mailto:bw@brycewray.com). I can't promise the answers will be that great, but I'll do my best to help. Others have helped me greatly in my attempts at site-building, so I want to "pay it forward," as the saying goes.