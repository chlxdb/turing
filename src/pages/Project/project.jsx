import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: {},
    }
  }
  render() {
    const { projects } = this.state
    // 团队项目们 （接口未开放）
    console.log(projects)
    return false ? (
      <div>
        <h3>project页面</h3>
        <div style={{ margin: '150px' }}>
          <h>团队项目</h>
          <Row
            style={{
              marginBottom: '80px',
              width: '100%',
              height: '220px',
              backgroundColor: 'grey',
            }}
          >
            <Col flex={4}>
              <p>图</p>
            </Col>
            <Col flex={5}>
              <p>介绍</p>
            </Col>
          </Row>

          <Row
            style={{
              marginBottom: '80px',
              width: '100%',
              height: '220px',
              backgroundColor: 'grey',
            }}
          >
            <Col flex={4}>
              <p>图</p>
            </Col>
            <Col flex={5}>
              <p>介绍</p>
            </Col>
          </Row>
        </div>
      </div>
    ) : (
      <h1>维护中...</h1>
    )
  }
}
