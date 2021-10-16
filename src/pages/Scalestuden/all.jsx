import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { Pagination } from 'antd'

import '../Leaderdetail/leaderdetail.css'

export default class All extends Component {
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
  componentDidMount() {
    this.getall()
  }
  getall = () => {
    axios
      .get(
        'http://150.158.171.105:7777/guest/member/findAllMembersByPage?page=1&size=3',
        {}
      )
      .then((response) => {
        // this.setState({ all: response.data })
        console.log(response.data.records)
      })
  }
  // onChange = (page, pageSize) => {
  //   console.log(page, pageSize)
  //   axios
  //     .get('http://150.158.171.105:7777/guest/member/findAllMembersByPage', {
  //       params: {
  //         pageNo: page,
  //         pageSize: pageSize,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  // }

  render() {
    return (
      <div>
        <p>disfsdkjhlsjdhfljah</p>
        <Pagination
          defaultPageSize={3}
          onChange={this.onChange}
          defaultCurrent={1}
          total={23}
        />
      </div>
    )
  }
}
