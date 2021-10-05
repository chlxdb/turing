import React, { Component } from 'react'

export default class active extends Component {
  constructor(props) {
    super(props)
    this.state = {
      honorlists: [],
    }
  }

  render() {
    const { honorlists } = this.state
    console.log(honorlists)
    return false ? (
      <div>
        <h3>HHHHHOR页面</h3>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
