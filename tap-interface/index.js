import { tapAssertDone, tapPlan } from '../app/actions'
import createListener from './listener'
import createSender from './sender'

export default (readableStream) => {
  const sender = createSender()

  createListener({
    readableStream,
    onAssert: (assert) => sender(tapAssertDone(assert)),
    onPlan: (plan) => sender(tapPlan(plan))
  })
}
