import React, { Component } from 'react'

export default class join extends Component {
  goRouter = (path) => {
    return () => {
      this.props.history.push({
        pathname: path,
        state: null,
      })
    }
  }

  render() {
    return (
      <div>
        <h3>join页面</h3>
        <p>dsfafaads</p>
        <div onClick={this.goRouter('/login')}>Go Login</div>
      </div>
    )
  }
}
