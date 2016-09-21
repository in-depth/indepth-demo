import path from 'path'
import { Server } from 'http'
import Express from 'express' // eslint-disable-line
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import routes from '../src/shared/views/routes'
import NotFoundPage from '../src/shared/views/PageNotFound/PageNotFound'
import rootReducer from '../src/shared/views/rootReducer'

const app = new Express()
const server = new Server(app)

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '/../dist/')))

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

function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Indepth Core</title>
      <base href="/" />
      <meta charset="utf-8">
      <meta http-equiv="cache-control" content="no-cache">
      <meta http-equiv="Expires" content="0">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/js/bundle.js"></script>
    </body>
  </html>
    `
}

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, err => {
  if (err) {
    return console.error(err)
  }
    return console.info(`Server running on http://localhost:${port} [${env}]`)
})
