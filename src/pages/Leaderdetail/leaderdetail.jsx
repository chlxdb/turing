import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import './leaderdetail.css'

import { Card, Carousel } from 'antd'

const contentStyle = {
  width: '60vw',
}
export default class leaderdetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detail: {},
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    const { id } = this.props.match.params
    console.log(id)

    axios
      .get(
        'https://www.turingteam.me:8081/guest/leaderInspectionIncident/LeaderInspectionIncidentQuery?incidentId=' +
          id,
        {}
      )
      .then((response) => {
        console.log(response.data.data)
        const detail = response.data.data.leaderInspectionIncident
        this.setState({ detail })
      })
  }

  render() {
    const { detail } = this.state
    return (
      <div className="div_box">
        <Row className="box_row">
          <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 18, offset: 3 }}
            lg={{ span: 11, offset: 7 }}
            xl={{ span: 10, offset: 6 }}
          >
            <Card className="leader_card" hoverable>
              <Carousel autoplay>
                <div style={contentStyle}>
                  <img
                    className="img"
                    alt="example"
                    src={
                      'https://www.turingteam.me:8081/' +
                      detail.incidentPhotoUrl
                    }
                  ></img>
                </div>
              </Carousel>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            className="col_liveContent"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 18, offset: 3 }}
            lg={{ span: 15, offset: 5 }}
            xl={{ span: 18, offset: 3 }}
          >
            <h1>{detail.incidentTitle}</h1>
            <span className="span_time">{detail.date}</span>
            <p className="livecontent">{detail.incidentContent}</p>
          </Col>
        </Row>
      </div>
    )
  }
}
