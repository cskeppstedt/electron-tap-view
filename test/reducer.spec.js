import test from 'tape-catch'
import * as actions from '../app/actions'
import reducer from '../app/reducers'
import { assertEvent, commentEvent, planEvent } from '../app/reducers/event-creators

test.only('reducer', (t) => {
  t.test('appends first assertion event', (assert) => {
    const state = {
      events: [],
      running: false
    }
    const action = actions.tapAssertDone({ id: '123', the: 'assert payload' })
    const actual = reducer(state, action)
    const expected = {
      events: [
        assertEvent({ id: '123', the: 'assert payload' })
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'assertion event is appended')
    assert.equal(actual.running, expected.running, 'running flag is set')
    assert.end()
  })

  t.test('appends assertion events while running', (assert) => {
    const state = {
      events: [ { the: 'pre-existing event' } ],
      running: true
    }
    const action = actions.tapAssertDone({ id: '123', the: 'assert payload' })
    const actual = reducer(state, action)
    const expected = {
      events: [
        { the: 'pre-existing event' },
        assertEvent({ id: '123', the: 'assert payload' })
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'assertion event is appended')
    assert.equal(actual.running, expected.running, 'running flag is preserved')
    assert.end()
  })

  t.test('appends first comment event', (assert) => {
    const state = {
      events: [],
      running: false
    }
    const action = actions.tapComment('the "#comment"!')
    const actual = reducer(state, action).events
    const expected = {
      events: [
        {
          type: 'comment',
          key: 'comment_1_the___comment__',
          comment: 'the "#comment"!'
        }
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'comment event is appended')
    assert.equal(actual.running, expected.running, 'running flag is set')
    assert.end()
  })

  t.test('appends comment events', (assert) => {
    const state = {
      events: [{ the: 'pre-existing event' }],
      running: false
    }
    const action = actions.tapComment('the "#comment"!')
    const actual = reducer(state, action).events
    const expected = {
      events: [
        { the: 'pre-existing event' },
        {
          type: 'comment',
          key: 'comment_1_the___comment__',
          comment: 'the "#comment"!'
        }
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'comment event is appended')
    assert.equal(actual.running, expected.running, 'running flag is preserved')
    assert.end()
  })

  t.test('appends plan events', (assert) => {
    const state = {
      events: [{ the: 'pre-existing event' }]
    }
    const action = actions.tapPlan({ the: 'plan' })
    const actual = reducer(state, action).events
    const expected = [
      { the: 'pre-existing event' },
      {
        type: 'plan',
        key: 'plan',
        plan: { the: 'plan' }
      }
    ]
    assert.deepEqual(actual, expected, 'plan event is appended')
    assert.end()
  })

  t.end()
})
