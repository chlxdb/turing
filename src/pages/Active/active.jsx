import React, { Component } from 'react'

import axios from 'axios'
import { Row, Col } from 'antd'
import { Carousel, Card, Tooltip } from 'antd'
import './active.css'

const contentStyle = {
  // height: '600px',
  width: '60vw',
  // color: 'black',
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: 'black',
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
    axios.get(`http://150.158.171.105:7777/guest/live`).then((e) => {
      console.log(e.data.data)
      const teamactive = e.data.data
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
                <Card hoverable style={{ wordBreak: 'break-all' }}>
                  <Carousel autoplay>
                    {element.livePhotos.map((value, index) => {
                      return (
                        <div key={index} style={contentStyle}>
                          <img
                            className="img"
                            alt="example"
                            src={
                              'http://150.158.171.105:7777/' +
                              value.livePhotoLoc
                            }
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
                xl={{ span: 9, offset: 2 }}
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
