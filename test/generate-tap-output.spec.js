var test = require('tape-catch')

test('timing test', (t) => {
  t.plan(1)
  t.equal(typeof Date.now, 'function')
})

test('other spec', (t) => {
  t.plan(1)
  t.equal(3, 1 + 2, 'just making sure arithmetics is still a thing')
})

test('third', (t) => {
  t.plan(1)
  t.equal(3, 1 + 2, 'just making sure arithmetics is still a thing')
})
