import { ipcMain } from 'electron'
import { IPC_DISPATCH_ACTION, IPC_MIDDLEWARE_READY } from '../shared/messages'

const setupSender = (rendererEndpoint) => {
  console.info('renderer ready')
  return (action) => {
    rendererEndpoint.send(IPC_DISPATCH_ACTION, action)
  }
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
