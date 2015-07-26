# vel-starter

bare-bones [vel](https://npmjs.com/package/vel) starter
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
var h = require('vel/h')
var main = require('main-loop')
var loop = main({ n: 0 }, render, require('vel'))
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

# contributing

If you like what you see, but want to add something more, fork this repo and add
your additional feature to the name of the fork. Try to be specific with the
name of your fork, listing the technologies used plus what features the fork
adds.

# variations

Check out the [list of forks](https://github.com/substack/vel-starter/network/members)
to see how other people have customized this starter repo.
