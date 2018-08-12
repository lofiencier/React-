import React from 'react'
export default (props) => <html>
  <head>
    <title>{props.title}</title>
    <meta charSet="utf-8"></meta>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
    <meta name="keywords" content={props.keywords}></meta>
    <meta name="description" content={props.description}></meta>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
  </head>
  <body><div id="root">{props.children}</div></body>
</html>

