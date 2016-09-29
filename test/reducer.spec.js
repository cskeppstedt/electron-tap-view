import test from 'tape-catch'
import * as actions from '../app/actions'
import reducer from '../app/reducers'
import { assertEvent, commentEvent, planEvent } from '../app/reducers/event-creators'

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
    const actual = reducer(state, action)
    const expected = {
      events: [
        commentEvent('the "#comment"!', 0)
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
      running: true
    }
    const action = actions.tapComment('the "#comment"!')
    const actual = reducer(state, action)
    const expected = {
      events: [
        { the: 'pre-existing event' },
        commentEvent('the "#comment"!', 1)
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'comment event is appended')
    assert.equal(actual.running, expected.running, 'running flag is preserved')
    assert.end()
  })

  t.test('re-initialize state with new assert', (assert) => {
    const state = {
      events: [
        { the: 'old event' },
        { another: 'old event' }
      ],
      running: false
    }
    const action = actions.tapAssertDone({ some: 'assert' })
    const actual = reducer(state, action)
    const expected = {
      events: [
        assertEvent({ some: 'assert' })
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'only new event is in the event list')
    assert.equal(actual.running, expected.running, 'running flag is set')
    assert.end()
  })

  t.test('re-initialize state with new comment', (assert) => {
    const state = {
      events: [
        { the: 'old event' },
        { another: 'old event' }
      ],
      running: false
    }
    const action = actions.tapComment('the new comment')
    const actual = reducer(state, action)
    const expected = {
      events: [
        commentEvent('the new comment', 0)
      ],
      running: true
    }

    assert.deepEqual(actual.events, expected.events, 'only new event is in the event list')
    assert.equal(actual.running, expected.running, 'running flag is set')
    assert.end()
  })

  t.test('ignoring summary comments when non-running', (assert) => {
    const state = {
      events: [{ the: 'pre-existing event' }],
      running: false
    }
    const expected = {
      events: [{ the: 'pre-existing event' }],
      running: false
    }
    const ignoredActions = [
      actions.tapComment('# tests 123 '),
      actions.tapComment('# fail   44\n'),
      actions.tapComment('# pass    9'),
      actions.tapComment('# ok')
    ]

    assert.plan(8)
    ignoredActions.reduce((currentState, action) => {
      const actual = reducer(currentState, action)
      assert.deepEqual(actual.events, expected.events, `"${action.payload}": is skipped`)
      assert.equal(actual.running, expected.running, `"${action.payload}": running flag is preserved`)
      return actual
    }, state)
  })

  t.test('appends plan events', (assert) => {
    const state = {
      events: [
        { the: 'pre-existing event' },
        { another: 'pre-existing event' },
        { third: 'pre-existing event' }
      ],
      running: true
    }
    const action = actions.tapPlan({ the: 'plan' })
    const actual = reducer(state, action)
    const expected = {
      events: [
        { the: 'pre-existing event' },
        { another: 'pre-existing event' },
        { third: 'pre-existing event' },
        planEvent({ the: 'plan' })
      ],
      running: false,
      nextEstimatedCount: 3
    }

    assert.deepEqual(actual.events, expected.events, 'plan event is appended')
    assert.equal(actual.running, expected.running, 'running flag is unset')
    assert.equal(actual.nextEstimatedCount, expected.nextEstimatedCount, 'nextEstimatedCount is set to the count of events')
    assert.end()
  })

  t.end()
})
