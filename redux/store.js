import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducers'
import rootSaga from './sagas'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(),
    bindMiddleware([sagaMiddleware])
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      console.log('Replacing reducers')
      store.replaceReducer(require('./reducers').default)
    })
  }

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
