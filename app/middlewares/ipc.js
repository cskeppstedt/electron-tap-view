import { ipcRenderer } from 'electron'
import { IPC_DISPATCH_ACTION, IPC_MIDDLEWARE_READY } from '../../shared/messages'

// Sets up a middleware that waits listens to messages from the main,
// process and dispatches them into the redux app in the renderer process.
export default (store) => {
  ipcRenderer.on(IPC_DISPATCH_ACTION, (event, { type, payload }) => {
    // Just blindly try to dispatch the action. We could do some
    // validation against the `../actions` module here.
    store.dispatch({ type, payload })
  })

  ipcRenderer.send(IPC_MIDDLEWARE_READY)

  return (next) => (action) => {
    next(action)
  }
}
