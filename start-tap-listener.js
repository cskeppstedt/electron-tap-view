const tapParser = require('tap-parser')

const attachParser = (readableStream) => {
  const p = tapParser()

  p.on('assert', ({ ok, id, diag }) => {
    if (ok) {
      console.info(`[${id}] ok`)
    } else {
      console.error(`[${id}] ${JSON.stringify(diag)}`)
    }
  })

  p.on('plan', function ({ start, end }) {
    readableStream.unpipe(p)
    process.nextTick(() => attachParser(readableStream))
  })

  readableStream.pipe(p)
}

module.exports = attachParser
