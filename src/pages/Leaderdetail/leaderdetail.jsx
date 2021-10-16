import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import './leaderdetail.css'

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

    axios
      .get(
        'http://150.158.171.105:7777/guest/leadInspection/getLeadInspcetionById/' +
          id,
        {}
      )
      .then((response) => {
        console.log(response.data.data)
        const detail = response.data.data
        this.setState({ detail })
      })
  }

  render() {
    const { detail } = this.state
    return (
      <div>
        <div className="paper">
          <Row style={{ margin: '2% 15%' }}>
            <Col span={24} style={{}}>
              <h1
                style={{
                  fontSize: '200%',
                  textAlign: 'center',
                  backgroundColor: 'black',
                  opacity: '0.5',
                  color: 'white',
                }}
              >
                {detail.title}
              </h1>
              <p style={{ fontSize: '150%', textIndent: '50px' }}>
                {detail.content}
                <span style={{ fontSize: '15px', fontFamily: 'fantasy' }}>
                  {' '}
                  时间：{detail.date}
                </span>
              </p>
            </Col>
          </Row>
          <Row style={{ margin: '0 15%' }}>
            <Col span={24}>
              <img
                style={{ width: '80%', height: '70%' }}
                src={'http://150.158.171.105:7777/' + detail.img}
                alt="none"
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
