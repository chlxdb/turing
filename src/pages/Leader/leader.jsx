import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import './leader.css'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'

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
        console.log(leaders)
      })
  }

  render() {
    const { leaders } = this.state
    return (
      <div>
        {leaders.map((element, id) => {
          return (
            <div className="paper" key={id}>
              <Link to={`/leaderdetail/${element.id}`}>
                <Badge.Ribbon text="更多详情>>>" color="red"></Badge.Ribbon>
              </Link>

              <Row style={{ margin: '0 15%' }}>
                <Col span={24} style={{}}>
                  <h1
                    style={{
                      fontSize: '200%',
                      textAlign: 'center',
                      color: '#515a6e',
                    }}
                  >
                    {element.title}
                  </h1>
                </Col>
              </Row>
              <Row style={{ margin: '0 15%', textAlign: 'center' }}>
                <Col span={24}>
                  <p style={{ fontSize: '20px' }}> {'时间：' + element.date}</p>
                  <img
                    style={{ width: '80%', height: '85%' }}
                    src={'http://150.158.171.105:7777/' + element.img}
                    alt="none"
                  />
                </Col>
              </Row>
            </div>
          )
        })}
      </div>
    )
  }
}
