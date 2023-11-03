# Silex Plugin Starter

A good place to start writing a Silex plugin. It supports server and/or client side plugins, in Javascript and TypeScript. Check [Silex developer docs if you need help](https://docs.silex.me/en/dev) or [join the discussions in the forum](https://community.silex.me/)

## TODO for your plugin

* [ ] Clone this repository on your local computer
* [ ] Install dependencies `npm i` and run the local server `npm start`
* [ ] Replace in all files `silex-plugin-starter` with your plugin name
* [ ] Choose Javascript over TypeScript: edit rollup configs and just change the input from `main.ts` to `main.js`
* [ ] Optout client side and or server side: edit `build` script in `package.json`, add/remove `npm run build:client` or `npm run builde:server`
* [ ] Tests: when writing tests for the client, add a "doc block" with `@jest-environment jsdom`
* [ ] Automate npm publish with github actions: you need to set the package `name` in `package.json` and the action secret `NPM_SECRET` in github
* [ ] Remove this "TODO" section and fill in the blanks in the rest of the README
* [ ] Show some gif/demo if possible
* [ ] Start creating your plugin from `src/main.js` or `src/main.ts`
* [ ] Run `npm test` and `npm run lint:fix` then commit and push your changes
* [ ] Create a version with `npm version patch` then push to github with `git push oringin main --follow-tags` which will **publish to npm thanks to github actions**

> **Add a gif or a live demo of your plugin here**

## Installation

This is how to use the silex-plugin-starter plugin in your Silex instance or JS project

Add as a dependency

```bash
$ npm i --save @silexlabs/silex-plugin-starter
```

Add to Silex config (client or server)

```js
import plugin from '@silexlabs/silex-plugin-starter'
// Or import YourPlugin from '../path/to/silex-plugin-starter'
// Or import YourPlugin from 'http://unpkg.com/your-plugin'
export default function(config, options) {
  config.addPlugin(plugin, {
    // ... plugin config ...
  })
};
```

## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|

## Development

Clone the repository

```sh
$ git clone https://github.com/silexlabs/silex-plugin-starter.git
$ cd silex-plugin-starter
```

Install dependencies

```sh
$ npm i
```

Build and watch for changes

```sh
$ npm run build:watch
```

Start the dev server

```sh
$ npm start
```

Publish a new version

```sh
$ npm test
$ npm run lint:fix
$ git commit -am "new feature"
$ npm version patch
$ git push origin main --follow-tags
```

## License

MIT