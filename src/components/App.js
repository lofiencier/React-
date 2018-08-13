import React, { Fragments, createElement } from 'react'
import { Route, Switch, Link } from "react-router-dom"
import routeConfigs from "../../routes/routeConfigs"

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.history);
    }
    componentWillMount() {
        console.log("???");
    }
    render() {
        const { path } = this.props.history;
        return (
            <div>
                <p>Header</p>
                <Link to="/jisihishihis">A Link That Never Exists!</Link>
                <Switch>
                    {
                        routeConfigs.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} thunk={route.thunk} />)
                    }
                </Switch>
            </div>
        )
    }
}
