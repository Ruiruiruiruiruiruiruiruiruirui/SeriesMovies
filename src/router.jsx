import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  Movies,
  Series
} from './routes'
import AppLayout from 'components/AppLayout'

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/Movies',
    component: Movies
  },
  {
    exact: true,
    path: '/Series',
    component: Series
  }
]

export default () => (
  <Switch>
    <AppLayout>
      {routes.map((route, i) => (
        <Route {...route} key={`r-${i}`} />
      ))}
    </AppLayout>
  </Switch>
)
