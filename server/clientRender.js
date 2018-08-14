import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'

import createHistory from 'history/createBrowserHistory'
import {Provider} from "react-redux"
import Layout from "./Layout"
import {AppContainer} from 'react-hot-loader'
import App from '../src/components/App'
import Loadable from "react-loadable"

const clientRender = App => {
    const store = createStore(update, {});
    const history = createHistory();
    // const url=store.getState().url;
    Loadable
        .preloadReady()
        .then(() => {
            return ReactDOM.hydrate(
                <AppContainer>
                <Provider store={store}>
                    <Router>
                        <App history={history}/>
                    </Router>
                </Provider>
            </AppContainer>, document.getElementById('root'))
        })
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module
        .hot
        .accept()
}

clientRender(App)

function update(state, action) {
    return {};
}