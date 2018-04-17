import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'store'
import App from 'router'
import { BrowserRouter } from 'react-router-dom'

import 'assets/css/global.css'

const renderApp = Component => {
  return render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </Provider>
    </AppContainer>
    , document.getElementById('app')
  )
}

const initApp = () => {
  renderApp(App)

  module.hot && module.hot.accept('router', () => {
    const NextApp = require('router').default
    renderApp(NextApp)
  })
}

initApp()