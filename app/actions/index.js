export const TAP_ASSERT_DONE = 'TAP_ASSERT_DONE'
export const TAP_COMMENT = 'TAP_COMMENT'
export const TAP_PLAN = 'TAP_PLAN'

export const tapAssertDone = (tapAssertion) => ({
  type: TAP_ASSERT_DONE,
  payload: tapAssertion
})

export const tapComment = (comment) => ({
  type: TAP_COMMENT,
  payload: comment
})

export const tapPlan = (plan) => ({
  type: TAP_PLAN,
  payload: plan
})
