import {
  TAP_ASSERT_DONE,
  TAP_PLAN
} from '../actions'

const initialState = {
  assertions: {},
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
        plan: undefined
      }

    case TAP_PLAN:
      return {
        ...state,
        plan: action.payload
      }

    default:
      return state
  }
}
