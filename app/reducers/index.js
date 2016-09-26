import {
  TAP_ASSERT_DONE,
  TAP_COMMENT,
  TAP_PLAN
} from '../actions'
import { assertEvent, commentEvent, planEvent } from './event-creators'

const initialState = {
  events: [],
  running: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        events: [
          ...state.events,
          assertEvent(action.payload)
        ],
        running: true
      }

    case TAP_COMMENT:
      return {
        ...state,
        events: [
          ...state.events,
          commentEvent(action.payload, state.events.length)
        ],
        running: true
      }

    case TAP_PLAN:
      return {
        ...state,
        events: [
          ...state.events,
          planEvent(action.payload)
        ]
      }

    default:
      return state
  }
}
