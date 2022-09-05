import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer } from './reducer'
import { rootEpic } from './epic'

const reduxLogger = require('redux-logger')

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose

const epicMiddleware = createEpicMiddleware()
const middlewares = [epicMiddleware]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(reduxLogger.createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const initStore = {}

export default function configureStore() {
  const store = createStore(rootReducer, initStore, enhancer)
  epicMiddleware.run(rootEpic)

  return store
}
