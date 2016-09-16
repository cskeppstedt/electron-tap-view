import {
  TAP_ASSERT_DONE,
  TAP_COMMENT,
  TAP_PLAN
} from '../actions'

const initialState = {
  assertions: {},
  currentCount: 0,
  lastComment: null,
  nextEstimatedCount: 0,
  plan: undefined
}

const assertName = (name, lastComment) => (
  lastComment
    ? `[ ${lastComment.replace(/^#\s+/, '')} ] ${name}`
    : name
)

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        assertions: {
          ...state.assertions,
          [`assert_${action.payload.id}`]: {
            ...action.payload,
            name: assertName(action.payload.name, state.lastComment)
          }
        },
        currentCount: state.currentCount + 1,
        lastComment: null,
        plan: undefined
      }

    case TAP_COMMENT:
      return {
        ...state,
        lastComment: action.payload
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
