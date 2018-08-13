import React from 'react'

  export default (props) => {
    const {bundles}=props;
  return <html>
  <head>
    <meta charSet="utf-8"></meta>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
    <meta name="keywords" content={props.keywords}></meta>
    <meta name="description" content={props.description}></meta>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
    {/* <div data-name="stylesheets" dangerouslySetInnerHTML={{__html:props.stylesheets.toString()}}></div> */}
  </head>
  <body><div id="root">{props.children}</div></body>                                                                                                                                                                                                                                                                                                                                     
  {bundles.length}
  {bundles}
  {/* {
    bundles.map(bundle=>{
      return `<script src="static/${bundle.file}"></script>`
    }).join("\n")
  } */}
  {/* <div data-name="script-dom" dangerouslySetInnerHTML={{__html:props.scripts.toString()}}></div> */}
</html>
}

