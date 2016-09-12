import {
  TAP_ASSERT_DONE,
  TAP_PLAN
} from '../actions'

const initialState = {
  assertions: {},
  currentCount: 0,
  nextEstimatedCount: 0,
  plan: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        assertions: {
          ...state.assertions,
          [`assert_${action.payload.id}`]: action.payload
        },
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
