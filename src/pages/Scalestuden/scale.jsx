import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { Tabs } from 'antd'
import All from './all'
import Cv from './cv'
import Nlp from './nlp'
import Front from './front'
import Back from './back'
import Ui from './ui'

const { TabPane } = Tabs

export default class scalestu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // teachers: {},
    }

    // axios
    //   .get(`https://www.turingteam.me:8081/guest/teacher/getAllTeachers`)
    //   .then((e) => {
    //     const teachers = e.data.data
    //     this.setState({ teachers })
    //     this.state.teachers = Array.from(this.state.teachers)
    //   })
  }
  componentDidMount() {
    this.callback()
  }
  callback = (key) => {
    console.log(key)
  }

  render() {
    return (
      <div>
        <div className="box_div">
          <Tabs
            style={{ margin: '0 50px' }}
            defaultActiveKey="1"
            onChange={this.callback}
          >
            <TabPane tab="全体成员" key="1">
              <All></All>
            </TabPane>
            <TabPane tab="计算机视觉" key="2">
              <Cv></Cv>
            </TabPane>
            <TabPane tab="自然语言处理" key="3">
              <Nlp></Nlp>
            </TabPane>
            <TabPane tab="前端" key="4">
              <Front></Front>
            </TabPane>
            <TabPane tab="后台" key="5">
              <Back></Back>
            </TabPane>
            <TabPane tab="UI设计" key="6">
              <Ui></Ui>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
