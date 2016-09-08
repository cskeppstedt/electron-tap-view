import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import actionCreators from '../actions'
import ipcMiddleware from '../middlewares/ipc'

const logger = createLogger({
  level: 'info', collapsed: true
})

const enhancer = compose(
  applyMiddleware(thunk, logger, ipcMiddleware),
  window.devToolsExtension
    ? window.devToolsExtension({ actionCreators })
    : noop => noop
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store)
  }

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
