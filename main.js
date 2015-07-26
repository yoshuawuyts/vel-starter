const vel = require('vel')

const el = vel(function (h, state) {
  return h('div', [
    h('h1', 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ])

  function onclick () {
    el({ n: state.n + 1 })
  }
})

document.querySelector('#content').appendChild(el({ n: 0 }))
