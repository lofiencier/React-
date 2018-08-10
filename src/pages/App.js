import React from 'react'
import { StaticRouter as Router, BrowserRouter, Route, Switch } from 'react-router-dom'
import styles from '../css/App'
import { loadComponent } from '../UniversalComponent'
import UniversalComponent from '../UniversalComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    // const { history } = props

    // this.state = {
    //   page: history.location.pathname
    // }

    // history.listen(({ pathname }) => {
    //   this.setState({ page: pathname })
    // })
  }
  render() {
    return (
      <div className="root">
        
      </div>
    )
  }

}
