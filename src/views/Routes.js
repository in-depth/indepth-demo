import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './AppLayout'
import { HomeRoute } from './home'
import { ObjectRoute } from './objects/object'
import configureStore from './configureStore'

const store = configureStore()

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={AppLayout}>
          <Route path="/" component={HomeRoute} />
          <Route path="/object" component={ObjectRoute} />
        </Route>
      </Router>
    </Provider>
  )
}

// const Routes = (props) => {
//   return (
//     <Provider store={store}>
//       <Router history={browserHistory}>
//         <Route component={AppLayout}>
//           <Route path="/" component={HomeRoute} />
//         </Route>
//       </Router>
//     </Provider>
//   )
// }

// {/*<Router*/}
//   {/*history={props.history}*/}
//   {/*routes={getRoutes(props.store, props.history)}*/}
// {/*/>*/}

export default Routes
