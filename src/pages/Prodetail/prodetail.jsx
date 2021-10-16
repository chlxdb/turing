import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './prodetail.css'
import axios from 'axios'

export default class prodetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {},
      member: [],
    }
  }

  componentDidMount() {
    this.getdetail()
  }
  getdetail = () => {
    const { id } = this.props.match.params
    console.log(id)
    axios
      .get('http://150.158.171.105:7777/guest/project/' + id, {})
      .then((response) => {
        // console.log(response.data.data)
        // console.log(response.data.data.projectMember)

        const detail = response.data.data
        const member = response.data.data.projectMember
        this.setState({ detail })
        this.setState({ member })
      })
  }

  render() {
    return (
      <div>
        <div className="paper">
          <Row style={{ margin: '0 15%' }}>
            <Col span={24} style={{}}>
              <h1
                style={{
                  fontSize: '200%',
                  textAlign: 'center',

                  color: '#515a6e',
                }}
              >
                {this.state.detail.projectName}
              </h1>
              <p style={{ color: '', fontSize: '150%' }}>
                {this.state.detail.projectContent}
              </p>
            </Col>
          </Row>
          <Row style={{ margin: '0 15%' }}>
            <Col span={24}>
              <img
                style={{ width: '100%', height: '70%' }}
                src={
                  'http://150.158.171.105:7777/' + this.state.detail.projectGif
                }
                alt="none"
              />
            </Col>
          </Row>
        </div>
        <div className="paper2">
          <Row style={{ margin: '0 15%' }}>
            <Col span={24} style={{}}>
              <h1
                style={{
                  fontSize: '200%',
                  textAlign: 'center',
                  color: '#515a6e',
                }}
              >
                参与项目成员
              </h1>
            </Col>
          </Row>

          {this.state.member.map((element, id) => {
            return (
              <Row
                key={id}
                style={{
                  margin: '3% 15%',
                  boxShadow: '0px 6px 12px -4px #888888',
                }}
              >
                <Col span={8}>
                  <img
                    style={{
                      width: '150px',
                      height: '150px',
                      verticalAlign: 'middle',
                    }}
                    alt="example"
                    src={'http://150.158.171.105:7777/' + element.memberIconUrl}
                  />
                </Col>
                <Col span={12}>
                  <p style={{ fontSize: '24px', marginRight: '15px' }}>
                    {element.memberName}
                    <span style={{ fontSize: '15px' }}>
                      ({element.memberMajor})
                    </span>
                  </p>

                  <p style={{ fontSize: '18px' }}>
                    学习方向：
                    <span style={{ fontSize: '17px', fontFamily: 'monospace' }}>
                      {element.memberTechnology}
                    </span>
                  </p>
                  <p style={{ fontSize: '18px' }}>
                    寄语：
                    <span style={{ fontSize: '17px', fontFamily: 'monospace' }}>
                      {element.memberIntroduction}
                    </span>
                  </p>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
