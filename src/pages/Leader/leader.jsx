import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import './leader.css'
import { Link } from 'react-router-dom'
import { Card, Carousel } from 'antd'

const contentStyle = {
  width: '60vw',
}
export default class leader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leaders: [],
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    axios
      .get(
        `http://150.158.171.105:7777/guest/leadInspection/getAllLeadInspcetions`
      )
      .then((e) => {
        const leaders = e.data.data
        this.setState({ leaders })
      })
  }

  render() {
    const { leaders } = this.state
    return (
      <div>
        <Row className="box_row">
          {leaders.map((element, id) => {
            return (
              <Col
                key={id}
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 2 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 9, offset: 2 }}
              >
                <Card hoverable style={{ wordBreak: 'break-all' }}>
                  <Carousel autoplay>
                    <div style={contentStyle}>
                      <img
                        className="img"
                        alt="example"
                        src={'http://150.158.171.105:7777/' + element.img}
                      ></img>
                    </div>
                  </Carousel>
                </Card>
                <Col
                  className="col_liveContent"
                  xs={{ span: 20, offset: 1 }}
                  sm={{ span: 20, offset: 1 }}
                  md={{ span: 20, offset: 1 }}
                  lg={{ span: 24, offset: 1 }}
                  xl={{ span: 24, offset: 1 }}
                  key={id}
                >
                  <h1>{element.title}</h1>
                  <span className="span_time">{element.date}</span>
                  &nbsp; &nbsp;
                  <Link to={`/leaderdetail/${element.id}`}>
                    更多详情 {'>>>'}
                  </Link>
                </Col>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
