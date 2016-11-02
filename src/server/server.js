import 'babel-polyfill'

import path from 'path'
import { Server } from 'http'
import Express from 'express' // eslint-disable-line
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import csshook from 'css-modules-require-hook/preset' // eslint-disable-line

import routes from '../shared/views/routes'
import NotFoundPage from '../shared/views/PageNotFound/PageNotFound'
import rootReducer from '../shared/views/rootReducer'

const app = new Express()
const server = new Server(app)

app.get('/static/sw.js', (req, res) => {
  res.set('Service-Worker-Allowed', '/demo')
  return res.sendFile(path.resolve(__dirname, '../src/static/sw.js'))
})

// define the folder that will be used for static assets
app.use(Express.static(path.resolve(process.cwd(), 'dist')))

// universal routing and rendering
app.get('*', (req, res) => {
  const store = createStore(rootReducer)
  const initialState = store.getState()
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message)
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      }

      // generate the React markup for the current route
      let markup
      if (renderProps) {
        // get base url
        renderProps.location.baseUrl = req.headers.host //eslint-disable-line
        // console.log('render props', renderProps)
        // console.log('req url', req.headers.host)
        // if the current route matched we have renderProps
        markup = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>)
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage />)
        res.status(404)
      }

      // render the index template with the embedded React markup
      return res.send(renderFullPage(markup, initialState))
    }
  )
})

// TODO: We should use FS to read the index.html generated by webpack
// and insert the html in there.
function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Indepth Demo</title>
      <base href="/" />
      <meta charset="utf-8">
      <meta http-equiv="cache-control" content="no-cache">
      <meta http-equiv="Expires" content="0">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
      <meta name="apple-mobile-web-app-capable" content="yes">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"/>
      <link rel="stylesheet" href="/common.css"/>
      <link rel="manifest" href="/static/manifest.json">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700|Roboto|Material+Icons">
    </head>
    <body>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <div id="root">${html}</div>
      <script src="/js/bundle.js"></script>
    </body>
  </html>
    `
}

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, '0.0.0.0', err => {
  if (err) {
    return console.error(err)
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`)
})