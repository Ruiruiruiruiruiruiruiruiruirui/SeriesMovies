import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import main, { mainSagaWatcher } from 'models/main'

const rootReducer = combineReducers({
  router: routerReducer,
  main
})

const reduxRouterMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield [
    // add MODEL_NAME
    ...mainSagaWatcher
  ]
}

const rootMiddleware = composeWithDevTools(applyMiddleware(
  reduxRouterMiddleware,
  sagaMiddleware
))

export const appDefaultState = {}

const store = createStore(rootReducer, appDefaultState, rootMiddleware)

sagaMiddleware.run(rootSaga)

export default store