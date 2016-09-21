import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

const AppRoutes = () => {
  return (
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} /> //eslint-disable-line
  )
}

export default AppRoutes
