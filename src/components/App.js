import React, {Fragments,createElement} from 'react'
import {Route, Switch,Link} from "react-router-dom"
import IndexPage from "./pages/Index/index"
import NotFound from "./pages/NotFound"
import Loadable from "react-loadable"
import Loading from "./pages/Loading"

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
        const {path} = this.props.history;
        return (
            <div>
                <p>Header</p>
                <Link to="/jisihishihis">A Link That Never Exists!</Link>
                <Switch>
                    <Route exact path="/" render={()=>createElement(
                        Loadable({
                            loader: () => import('./pages/Index'),
                            modules: ['Index'],
                            loading:Loading,
                            webpack: () => [require.resolveWeak('./pages/Index')],
                          })
                    )}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        )
    }
}
