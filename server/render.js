import React from 'react'
import ReactDOM from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { StaticRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../src/pages/App'
import { StaticRouter as Router,Link } from 'react-router-dom'

export default ({ clientStats }) => (req, res) => {
  const context = {}
  const history = createHistory({ initialEntries: [req.url] });
  
  const app = ReactDOM.renderToString(<App/>)
  const chunkNames = flushChunkNames()

  const { js, styles, cssHash, scripts, stylesheets } = flushChunks(
    clientStats,
    { chunkNames }
  )

  console.log('CHUNKNAMES', chunkNames)
  console.log('PATH', req.path)
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames)
  console.log('SCRIPTS SERVED', scripts)
  console.log('STYLESHEETS SERVED', stylesheets)
  console.log('CONTEXT', context)

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>react-universal-component-boilerplate</title>
          ${styles}
        </head>
        <body>
          <div id="root">${app}</div>
          ${cssHash}
          ${js}
        </body>
      </html>`
  )
}
