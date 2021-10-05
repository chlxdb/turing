import React, { Component } from 'react'

export default class leader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leaders: {},
    }
  }

  goRouter = (path) => {
    return () => {
      this.props.history.push({
        pathname: path,
        state: null,
      })
    }
  }

  render() {
    const { leaders } = this.state
    // 领导视察们的信（未开放）
    console.log(leaders)
    return false ? (
      <div>
        <h3>leader页面</h3>
        <p>dsfafaads</p>
        <div onClick={this.goRouter('/login')}>Go Login</div>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
