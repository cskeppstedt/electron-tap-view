import tapParser from 'tap-parser'

const attachParser = (options) => {
  const { readableStream, onAssert, onPlan } = options
  const p = tapParser()

  if (typeof onAssert === 'function') {
    p.on('assert', ({ ok, id, diag }) => {
      onAssert({ ok, id, diag })

      if (ok) {
        console.info(`[${id}] ok`)
      } else {
        console.error(`[${id}] not ok, diag: ${JSON.stringify(diag)}`)
      }
    })
  } else {
    console.warn('no `onAssert` provided')
  }

  if (typeof onPlan === 'function') {
    p.on('plan', function ({ start, end }) {
      // The plan is emitted after all the asserts are done.
      console.info(`[plan] ${start}..${end}`)
      onPlan({ start, end })
      readableStream.unpipe(p)
      process.nextTick(() => attachParser(options))
    })
  } else {
    console.warn('no `onPlan` provided')
  }

  readableStream.pipe(p)
  console.info('[listener] attached new listener to readableStream')
}

export default attachParser
