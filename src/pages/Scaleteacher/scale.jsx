import React, { Component } from 'react'
import axios from 'axios'

import { List, Card } from 'antd'

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

  render() {
    // 老师们的信息
    this.state.teachers = Array.from(this.state.teachers)
    console.log(this.state.teachers)
    return (
      <div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
            xxl: 2,
          }}
        >
          {this.state.teachers.map((element, id) => {
            return (
              <List.Item>
                <Card
                  key={id}
                  title={element.teacherName + ' / ' + element.teacherBorn}
                >
                  <img
                    style={{ width: '8%' }}
                    src={'http://150.158.171.105:8080/' + element.teacherImg}
                  ></img>
                </Card>
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}
