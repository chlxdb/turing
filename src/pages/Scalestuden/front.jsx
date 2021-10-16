import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'

import '../Leaderdetail/leaderdetail.css'

export default class Front extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: {},
    }

    axios
      .get(
        `http://150.158.171.105:7777/guest/member/findMembersByTechnology?technology=%E5%89%8D%E7%AB%AF&page=1&size=2`
      )
      .then((e) => {
        const teachers = e.data
        this.setState({ teachers })
      })
  }

  render() {
    this.state.teachers = Array.from(this.state.teachers)
    console.log(this.state.teachers)
    return (
      <div>
        <p>front</p>
      </div>
    )
  }
}
