import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'

import jpg from './01.jpg'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamintroduct: {},
      teacherguobao: {},
      preFourAwards: {},
      preFourTeamActivity: {},
    }

    /**
     * 获取团队简介
     */
    axios.get(`http://150.158.171.105:8080/guest/introduction`).then((e) => {
      const teamintroduct = e.data.data[0]
      this.setState({ teamintroduct })
    })
    console.log(1)

    /**
     * 获取国保老师的信息
     */
    axios
      .get(`http://150.158.171.105:8080/guest/teacher/getTeacherById/1`)
      .then((e) => {
        const teacherguobao = e.data.data
        this.setState({ teacherguobao })
      })
    // http://150.158.171.105:8080/guest/award/getAllAwards
    axios
      .get(`http://150.158.171.105:8080/guest/award/getAllAwards`)
      .then((e) => {
        const allAwards = e.data.awards
        // 取最新的四个奖项
        const preFourAwards = allAwards.slice(-4)
        console.log(preFourAwards)
        this.setState({ preFourAwards })
      })
  }

  render() {
    const { teamintroduct, teacherguobao, preFourAwards, preFourTeamActivity } =
      this.state
    // 团队介绍
    console.log(teamintroduct)
    // 国保老师的信息
    console.log(teacherguobao)
    // 最新的四个奖项
    console.log(preFourAwards)
    // 最新的四个活动（接口还没得）
    console.log(preFourTeamActivity)

    return false ? (
      <div>
        <div
          style={{ width: '100%', height: '300px', backgroundColor: 'black' }}
        >
          <img
            style={{ width: '100%', height: '300px', opacity: '0.4' }}
            src={jpg}
            alt="none"
          ></img>
        </div>
        <div style={{ margin: '15px' }}>
          <h>指导老师&&团队介绍</h>
          <Row>
            <Col flex={2}>
              <p>图</p>
            </Col>
            <Col flex={2}>
              <p> 指导老师 </p>
            </Col>
            <Col flex={3}>
              <p> 团队介绍 </p>
            </Col>
          </Row>
        </div>
        <div style={{ margin: '15px' }}>
          <h>团队项目</h>
          <Row style={{ height: '300px' }}>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p>图</p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
          </Row>
        </div>
        <div style={{ margin: '15px' }}>
          <h>团队活动</h>
          <Row style={{ height: '300px' }}>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p>图</p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col flex={3} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
          </Row>
        </div>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
