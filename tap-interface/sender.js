import { ipcMain } from 'electron'
import { IPC_DISPATCH_ACTION, IPC_MIDDLEWARE_READY } from '../shared/messages'
import valvelet from 'valvelet'

const RATE_LIMIT = 10 // The maximum number of allowed calls per interval.
const RATE_INTERVAL = 100 // The timespan where limit is calculated.

const setupSender = (rendererEndpoint) => {
  console.info('renderer ready')

  const sender = (action) => {
    rendererEndpoint.send(IPC_DISPATCH_ACTION, action)
  }

  return valvelet(sender, RATE_LIMIT, RATE_INTERVAL)
}

export default () => {
  const queue = ((q) => {
    const log = (eventName) => console.warn(`[queue:${q.length}] ${eventName}`)
    return {
      push: (action) => {
        q.push(action)
        log('item pushed')
      },
      flush: (sender) => {
        log('flushing')
        q.splice(0).forEach(sender)
      }
    }
  })([])

  let sender

  ipcMain.on(IPC_MIDDLEWARE_READY, (event, arg) => {
    sender = setupSender(event.sender)
    queue.flush(sender)
  })

  return (action) => {
    sender ? sender(action) : queue.push(action)
  }
}
