import React, { Component } from 'react'

export default class scaletea extends Component {
  goRouter = (path) => {
    return () => {
      this.props.history.push({
        pathname: path,
        state: null,
      })
    }
  }

  render() {
    return false ? <div></div> : <h1>维护中...</h1>
  }
}
