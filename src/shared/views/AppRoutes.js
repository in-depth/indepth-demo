import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

const topPos = document.getElementById('content')

const AppRoutes = () => {
  return (
    <Router history={browserHistory} routes={routes} onUpdate={() => document.getElementById('content').scrollTop = topPos-10} /> //eslint-disable-line
  )
}

export default AppRoutes
