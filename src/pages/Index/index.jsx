import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'

import jpg from './01.jpg'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.setState({
      teamintroduct: {},
    })

    /**
     * 获取团队简介
     */
    axios.get(`http://150.158.171.105:8080/guest/introduction`).then((e) => {
      const teamintroduct = e.data[0]
      this.setState({ teamintroduct })
    })
    console.log(1)
  }

  render() {
    // const { teamintroduct } = this.state
    // console.log(teamintroduct)
    return (
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
    )
  }
}
