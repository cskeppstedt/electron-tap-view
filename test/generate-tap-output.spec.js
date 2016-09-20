const test = require('tape-catch')

test('timing test', (t) => {
  t.plan(1)
  t.equal(typeof Date.now, 'function')
})

test('other spec', (t) => {
  t.plan(1)
  t.equal(3, 1 + 2, 'just making sure arithmetics is still a thing')
})

for (let i = 0; i < 20; i++) {
  test(`third:${i}`, (t) => {
    t.plan(1)
    setTimeout()
    t.equal(i, 0 + i, 'tautologies never get old')
  })
}
