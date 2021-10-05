import React, { Component } from 'react'

export default class scalestu extends Component {
  goRouter = (path) => {
    return () => {
      this.props.history.push({
        pathname: path,
        state: null,
      })
    }
  }

  render() {
    return false ? (
      <div>
        <h3>scael页面</h3>
        <p>d</p>
        <div onClick={this.goRouter('/login')}>Go Login</div>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
