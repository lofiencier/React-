import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("<<<");
    }
    componentWillMount(){
        console.log("???")
    }
    render() {
        return (
            <span>1</span>
        )
    }
}
