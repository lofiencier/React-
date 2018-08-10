require('colors')
const express = require('express')
const webpack = require('webpack')
const noFavicon = require('express-no-favicons')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const compression = require('compression')
const logger = require('morgan')
const fs = require('fs')
const clientConfig = require('../webpack/client.dev')
const serverConfig = require('../webpack/server.dev')
const clientConfigProd = require('../webpack/client.prod')
const serverConfigProd = require('../webpack/server.prod')

const accessLog = fs.createWriteStream('./logs/access.log', { flags: 'a' })
const errorLog = fs.createWriteStream('./logs/error.log', { flags: 'a' })

const publicPath = clientConfig.output.publicPath
const outputPath = clientConfig.output.path
const DEV = process.env.NODE_ENV === 'development'
const app = express()
app.use(noFavicon())

app.use(logger('dev'))
app.use(logger('combined', { stream: accessLog }))
app.use(
  logger('combined', {
    skip(req, res) {
      return res.statusCode < 400
    }
  })
)

app.use(compression())

let isBuilt = false

const done = () =>
  !isBuilt &&
  app.listen(3001, () => {
    isBuilt = true
    console.log('BUILD COMPLETE -- Listening @ http://localhost:3000'.magenta)
  })

if (DEV) {
  const compiler = webpack([clientConfig, serverConfig])
  const clientCompiler = compiler.compilers[0]
  const options = { publicPath, stats: { colors: true } }

  app.use(webpackDevMiddleware(compiler, options))
  app.use(webpackHotMiddleware(clientCompiler))
  app.use(webpackHotServerMiddleware(compiler))

  compiler.plugin('done', done)
} else {
  webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
    const clientStats = stats.toJson().children[0]
    const serverRender = require('../buildServer/main.js').default

    app.use(publicPath, express.static(outputPath))
    app.use(serverRender({ clientStats }))

    done()
  })
}
