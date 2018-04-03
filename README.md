# craft-vue

All the power of a Vue's webpack template & single file components tailored for a Craft CMS project.

## What's Included

- `npm run dev` / `yarn dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components
  - State preserving hot-reload
  - Page reloading on file edits (twig, html, etc)
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build` / `yarn build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)
  - Babel compiling
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
  - Static assets compiled with version hashes for efficient long-term caching
  - Bundle size analytics

### Fork It And Make Your Own

You can (and should) fork this repo to create your own boilerplate

## Build Setup

``` bash
# create & install project
composer create-project chasegiunta/craft-vue PATH -s RC

# run Craft's setup command

# install dependencies
npm install # yarn

# run dev server (default runs on localhost:8080)
npm run dev # yarn dev

# build for production with minification
npm run build # yarn build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use SASS:
``` bash
npm install sass-loader node-sass --save-dev
# yarn add sass-loader node-sass --dev
```
Note you also need to install node-sass because sass-loader depends on it as a peer dependency.

Read more about this at http://vuejs-templates.github.io/webpack/pre-processors.html

## Babel Compiling
This boilerplate uses babel-preset-env for configuring babel. [You can read more about it here.](http://vuejs-templates.github.io/webpack/babel.html)

## Linting
This boilerplate uses ESLint as the linter, and uses the Standard preset with some small customizations. [You can read more about it here.(http://vuejs-templates.github.io/webpack/linter.html)
