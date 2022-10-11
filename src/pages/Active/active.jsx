import React, { Component } from 'react'

import axios from 'axios'
import { Row, Col } from 'antd'
import { Carousel, Card } from 'antd'
import './active.css'

const contentStyle = {
  width: '60vw',
}

export default class active extends Component {
  constructor() {
    super()
    this.state = {
      teamactive: [],
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    axios
      .get(`https://www.turingteam.me:8081/guest/live/liveQuery`)
      .then((e) => {
        console.log(e.data.data.lives)
        const teamactive = e.data.data.lives
        this.setState({ teamactive })
      })
  }
  render() {
    return (
      <div>
        {this.state.teamactive.map((element, id) => {
          return (
            <Row key={id} className="box_row">
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 11, offset: 7 }}
                xl={{ span: 11, offset: 2 }}
              >
                <Card hoverable className="card_live">
                  <Carousel autoplay vertical={true}>
                    {element.livePhotoUrl.map((value, index) => {
                      return (
                        <div key={index} style={contentStyle}>
                          <img
                            className="img"
                            alt="example"
                            src={'https://www.turingteam.me:8081/' + value}
                          ></img>
                        </div>
                      )
                    })}
                  </Carousel>
                </Card>
              </Col>

              <Col
                className="col_liveContent"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 11, offset: 7 }}
                xl={{ span: 9, offset: 1 }}
                key={id}
              >
                <h1>{element.liveName}</h1>
                <span className="span_time">{element.liveTime}</span>

                <p className="livecontent"> {element.liveContent}</p>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
