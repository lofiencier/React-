import React from 'react'
import ReactDOM from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'
// import { flushChunkNames } from 'react-universal-component/server'
import Layout from "./Layout"

import { StaticRouter as Router, Link } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from '../src/components/App'



export default ({ clientStats }) => (req, res) => {
  const url = req.path;
  const history = createHistory({ initialEntries: [req.path] })
  const store = createStore(update, {});
  const context={};

  res.send(ReactDOM.renderToString(
    <Layout>
        <Provider store={store}>
          <Router location={url} context={context}>
            <App history={history}/>
          </Router>
        </Provider>
    </Layout>
  ))
}

function update(state, action) {
  return {};
}
