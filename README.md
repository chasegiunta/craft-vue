# craft-vue

All the power of Vue CLI's scaffolding & single file components tailored for a Craft CMS project.

## What's Included

- `npm run dev` / `yarn dev`: first-in-class development experience.

  - Webpack + `vue-loader` for single file Vue components
  - State preserving hot-reload
  - Page reloading on file edits (twig, html, etc)
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build` / `yarn build`: Production ready build.
  - JavaScript minification with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)
  - Babel compiling
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
  - Static assets compiled with version hashes for efficient long-term caching
  - Bundle size analytics

## Fork It And Make Your Own

You should fork this repo to create your own opinionated boilerplate for your setup. This template makes no assumptions about pre-processors, template structure, or linting configurations.

I've also created a [fork of this boilerplate](https://github.com/chasegiunta/craft-vue-tailwind) that integrates TailwindCSS & Purgecss.

## Setup

This boilerplate requires Vue CLI 3 be [installed globally on your machine](https://cli.vuejs.org/guide/installation.html).

```bash
# create & install project
composer create-project chasegiunta/craft-vue PATH

# run Craft's setup & install
./craft setup

# install the Twigpack plugin
./craft install/plugin twigpack

# install dependencies
npm install # yarn

# run dev server (default runs on localhost:8080)
npm run dev # yarn dev (alias for 'yarn serve')

# build for production with minification
npm run build # yarn build
```

Once up and running, the fun part comes in using Vue CLI's GUI to customize your project to suite your needs. Simply run `vue ui` and import your newly created project to get started.

You can also run your `dev` & `build` tasks from the GUI to get valuable build stats & runtime analytics.

**NOTE:** During development, _only your assets_ will be served from `localhost:8080` and referenced in the base template. You'll still load your site locally under your normal development domain (mysite.test, etc.). This will also cause a brief unstyled flash on page loads due to JS/CSS assets loading from javascript for development. **This flash isn't present after build, on production**.

If webpack's dev server (`yarn dev`) is not running, Twigpack will serve your assets from the build directory.

For a detailed explanation on how things work, check out the [Twigpack docs](https://github.com/nystudio107/craft-twigpack) & [Vue CLI docs](https://cli.vuejs.org/).

## Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use SASS:

```bash
npm install sass-loader node-sass --save-dev
# yarn add sass-loader node-sass --dev
```

Note you also need to install node-sass because sass-loader depends on it as a peer dependency.

Read more about this at https://cli.vuejs.org/guide/css.html#pre-processors

## Automatic Component Registration

Any vue components placed within `src/components` will be registered with Vue automatically. You may nest these in subfolders if you wish.

## Babel Compiling

This boilerplate uses babel-preset-env for configuring babel. [You can read more about it here.](https://cli.vuejs.org/config/#babel)

## Linting

You can enable linting by adding the `@vue/cli-plugin-eslint` plugin through the GUI `vue ui`.
