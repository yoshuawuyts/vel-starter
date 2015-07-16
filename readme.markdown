# virtual-dom-starter

bare-bones [virtual-dom](https://npmjs.com/package/virtual-dom) starter
using [main-loop](https://npmjs.com/package/main-loop)
and [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run)

[view the starter demo](http://substack.neocities.org/virtual_dom_starter.html)

# quick start

```
$ npm run watch &
$ npm start
```

# commands

* `npm run build` - build js for production
* `npm run watch` - automatically build js on file changes for development
* `npm start` - start a development server

# starter code

``` js
var h = require('virtual-dom/h')
var main = require('main-loop')
var loop = main({ n: 0 }, render, require('virtual-dom'))
document.querySelector('#content').appendChild(loop.target)

function render (state) {
  return h('div', [
    h('h1', 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ])
  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
```
