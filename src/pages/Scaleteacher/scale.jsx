import React, { Component } from 'react'
import axios from 'axios'

export default class scaletea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teachers: {},
    }

    axios
      .get(`http://150.158.171.105:8080/guest/teacher/getAllTeachers`)
      .then((e) => {
        const teachers = e.data.data
        this.setState({ teachers })
      })
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
    const { teachers } = this.state
    // 老师们的信息
    console.log(teachers)
    return false ? (
      <div>
        <h3>scael页面</h3>
        <p>dsfafaads</p>
        <div onClick={this.goRouter('/login')}>Go Login</div>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
