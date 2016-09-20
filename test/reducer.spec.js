const test = require('tape-catch')

test('some test', (t) => {
  t.plan(1)
  t.equal(typeof Date.now, 'function')
})
