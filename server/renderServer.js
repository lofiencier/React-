import React, {Fragments} from 'react'
import ReactDOM from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'
import Layout from "./Layout"

import {StaticRouter as Router, Link} from "react-router-dom"
import {Provider} from "react-redux"
import {createStore, combineReducers} from 'redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from '../src/components/App'
import fs from "fs"

import Loadable from "react-loadable"
import stats from "../dist/react-loadable.json"
import {getBundles} from "react-loadable/webpack"

// const wl = fs.createWriteStream("./clientStats")

export default({clientStats}) => (req, res) => {
  // wl.write(JSON.stringify(clientStats));
  const url = req.path;
  const history = createHistory({
    initialEntries: [req.path]
  })
  const store = createStore(update, {});
  const context = {};
  // const chunkNames = flushChunkNames()
  const modules=[];

  // const {js, styles, cssHash, scripts, stylesheets} = flushChunks(clientStats, {chunkNames})


  // console.log('CHUNKNAMES', chunkNames) console.log('PATH', req.path)
  // console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames) console.log('SCRIPTS
  // SERVED', scripts) console.log('STYLESHEETS SERVED', stylesheets)
  const bundles=getBundles(stats,modules);
  res.send(ReactDOM.renderToString(
    <Layout bundles={bundles}>
      <Provider store={store}>
        <Router location={url} context={context}>
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <App history={history}/>
          </Loadable.Capture>
        </Router>
      </Provider>
    </Layout>
  ));
  // console.log('CONTEXT', context)
  console.log(`MODULES:${modules}`.red);
}
function update(state, action) {
  return {};
}
