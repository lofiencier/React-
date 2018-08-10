import React from 'react'

export default class Why extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('jsjksj')
  }

  onLoad({ isSync, isServer, isMount }) {
    console.log('你是个钩子？')
  }

  render() {
    return <div>我没有侦听啊</div>
  }
}
