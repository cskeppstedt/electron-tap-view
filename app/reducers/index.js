import { TAP_ASSERT_DONE } from '../actions'

const initialState = {
  assertions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        assertions: [...state.assertions, action.payload]
      }

    default:
      return state
  }
}
