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

const shouldIgnoreComment = ({ running }, { payload }) => (
  !running && (
    /^#\s+(tests|pass|fail)\s+(\d+)\s*$/.test(payload) ||
    /^#\s+ok\s*$/.test(payload)
  )
)

const shouldReset = ({ running }) => (
  !running
)

export default (state = initialState, action) => {
  switch (action.type) {
    case TAP_ASSERT_DONE:
      return {
        ...state,
        events: shouldReset(state, action)
        ? [
          assertEvent(action.payload)
        ]
        : [
          ...state.events,
          assertEvent(action.payload)
        ],
        running: true
      }

    case TAP_COMMENT:
      if (shouldIgnoreComment(state, action)) {
        return state
      }

      return {
        ...state,
        events: shouldReset(state, action)
        ? [
          commentEvent(action.payload, 0)
        ]
        : [
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
        ],
        nextEstimatedCount: state.events.length,
        running: false
      }

    default:
      return state
  }
}
