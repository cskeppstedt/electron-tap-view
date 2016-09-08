export const TAP_ASSERT_DONE = 'TAP_ASSERT_DONE'

export const tapAssertDone = (tapAssertion) => ({
  type: TAP_ASSERT_DONE,
  payload: tapAssertion
})
