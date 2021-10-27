import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import './notice.css'
import noticepic from './notice.png'
// import { Link } from 'react-router-dom'
// import { Card, Carousel } from 'antd'
// import { useState } from 'react'
import { Timeline } from 'antd'

const contentStyle = {
  width: '60vw',
}
export default class notice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notices: [],
      mode: 'left',
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    axios
      .get(`http://150.158.171.105:7777/guest/inform/getAllInforms`)
      .then((e) => {
        const notices = e.data.data
        this.setState({ notices })
      })
  }

  render() {
    return (
      <div className="div_notice">
        <Row>
          <Col
            className="col_notice"
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 8, offset: 1 }}
            md={{ span: 5, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 9, offset: 1 }}
          >
            {' '}
            <img src={noticepic} style={{ width: '3vw' }}></img>
            <span className="left-text-notice"> 团队通告:</span>
          </Col>
        </Row>

        {this.state.notices.map((element, id) => {
          return (
            <Row key={id}>
              <Col
                xs={{ span: 10, offset: 3 }}
                sm={{ span: 10, offset: 3 }}
                md={{ span: 10, offset: 3 }}
                lg={{ span: 10, offset: 3 }}
                xl={{ span: 9, offset: 3 }}
              >
                <Timeline mode={this.state.mode}>
                  <Timeline.Item label={element.informCreateTime}>
                    {element.informTitle}
                  </Timeline.Item>
                </Timeline>
              </Col>
              <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 9, offset: 1 }}
              >
                <Timeline mode={this.state.mode}>
                  <Timeline.Item color="red">
                    {element.informContent}
                  </Timeline.Item>
                </Timeline>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
