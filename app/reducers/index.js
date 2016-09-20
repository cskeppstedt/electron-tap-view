import {
  TAP_ASSERT_DONE,
  TAP_COMMENT,
  TAP_PLAN
} from '../actions'

const initialState = {
  events: [],
  currentCount: 0,
  nextEstimatedCount: 0,
  plan: undefined
}

const assertEvent = (assert) => (
  {
    type: 'assert',
    key: `assert_${assert.id}`,
    assert
  }
)

const commentEvent = (comment, idCounter) => (
  {
    type: 'comment',
    key: `comment_${idCounter}_${comment.replace(/[^a-z]/ig, '_')}`,
    comment
  }
)

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        events: [
          ...state.events,
          assertEvent(action.payload)
        ],
        currentCount: state.currentCount + 1,
        plan: undefined
      }

    case TAP_COMMENT:
      return {
        ...state,
        events: [
          ...state.events,
          commentEvent(action.payload, state.currentCount)
        ],
        currentCount: state.currentCount + 1,
        plan: undefined
      }

    case TAP_PLAN:
      return {
        ...state,
        currentCount: 0,
        plan: action.payload,
        nextEstimatedCount: state.currentCount
      }

    default:
      return state
  }
}
