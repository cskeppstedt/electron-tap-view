import tapParser from 'tap-parser'

const attachParser = ({ readableStream, onAssert, onComment, onPlan }) => {
  const p = tapParser()

  if (typeof onAssert === 'function') {
    p.on('assert', onAssert)
  }

  if (typeof onPlan === 'function') {
    p.on('plan', onPlan)
  }

  p.on('plan', function ({ start, end }) {
    // The plan is emitted after all the asserts are done.
    // We need to attach a new tap-parser at this point, the
    // existing parser will not pick up any further input.
    readableStream.unpipe(p)
    process.nextTick(() => attachParser({ readableStream, onAssert, onComment, onPlan }))
  })

  readableStream.pipe(p)
}

export default attachParser
