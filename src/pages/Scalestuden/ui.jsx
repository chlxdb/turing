import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'

import '../Leaderdetail/leaderdetail.css'

export default class Ui extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: {},
    }

    // axios
    //   .get(`http://150.158.171.105:7777/guest/teacher/getAllTeachers`)
    //   .then((e) => {
    //     const teachers = e.data.data
    //     this.setState({ teachers })
    //   })
  }

  render() {
    this.state.teachers = Array.from(this.state.teachers)
    console.log(this.state.teachers)
    return (
      <div>
        <p>ui</p>
      </div>
    )
  }
}
