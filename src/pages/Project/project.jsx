import React, { Component } from 'react'
import { Row, Col } from 'antd'
export default class project extends Component {
  render() {
    return (
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
    )
  }
}
