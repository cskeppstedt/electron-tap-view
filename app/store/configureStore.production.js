import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ipcMiddleware from '../middlewares/ipc'
import rootReducer from '../reducers'

const enhancer = applyMiddleware(thunk, ipcMiddleware)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
