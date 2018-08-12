import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Provider } from "react-redux"
import Layout from "./Layout"
import { AppContainer } from 'react-hot-loader'
import App from '../src/components/App'



const clientRender = App => {
    const store = createStore(update, {});
    const history = createHistory();
    // const url=store.getState().url;

    return ReactDOM.hydrate(<AppContainer>
        <Provider store={store}>
            <Router>
                <App history={history}/>
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
    )
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../src/components/App.js', () => {
        const App = require('../src/components/App').default 
        clientRender(App)
    })
}

clientRender(App)


function update(state, action) {
    return {};
}