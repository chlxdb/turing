import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './prodetail.css'
import axios from 'axios'
import { Card, Carousel, Avatar, Tooltip } from 'antd'

const contentStyle = {
  width: '60vw',
}
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
      .get(
        'https://www.turingteam.me:8081/guest/project/queryProjectById?id=' +
          id,
        {}
      )
      .then((response) => {
        const detail = response.data.data.Project
        console.log(detail)
        const member = response.data.data.Project.projectMemberName
        console.log(member)
        this.setState({ detail })
        this.setState({ member })
      })
  }

  render() {
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
            {/* element.projectName */}
            <Card hoverable style={{ wordBreak: 'break-all' }}>
              <Carousel autoplay>
                <div style={contentStyle}>
                  <img
                    className="img"
                    alt="example"
                    src={
                      'https://www.turingteam.me:8081/' +
                      this.state.detail.projectGifUrl
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
            <h1>{this.state.detail.projectName}</h1>
            <span className="span_time">{this.state.detail.date}</span>
            <p className="projectcontent">{this.state.detail.projectContent}</p>
          </Col>
        </Row>

        <div className="paper2">
          <Row>
            <Col span={24}>
              <h1 className="h1_joinmerber">参与项目成员</h1>
            </Col>
          </Row>

          {this.state.member.map((element, id) => {
            return (
              <Row key={id} className="joinmerber_row">
                <Col>
                  <Avatar
                    size={80}
                    src={
                      'https://150.158.171.105:7777/' + element.memberIconUrl
                    }
                  />
                </Col>
                <Col
                  xs={{ span: 20, offset: 1 }}
                  sm={{ span: 20, offset: 1 }}
                  md={{ span: 20, offset: 1 }}
                  lg={{ span: 20, offset: 1 }}
                  xl={{ span: 12, offset: 1 }}
                >
                  <p className="p_name" style={{ fontSize: '1.5vw' }}>
                    {element.memberName}
                    <span>({element.memberMajor})</span>
                  </p>

                  <p className="p_memberTechnology">
                    学习方向：
                    <span className="p_memberTechnology">
                      {element.memberTechnology}
                    </span>
                  </p>
                </Col>
                <Tooltip placement="bottom" title={element.memberIntroduction}>
                  <Col
                    className="card_col_foot"
                    xs={{ span: 20, offset: 1 }}
                    sm={{ span: 20, offset: 1 }}
                    md={{ span: 20, offset: 1 }}
                    lg={{ span: 20, offset: 1 }}
                    xl={{ span: 18, offset: 1 }}
                  >
                    <p>
                      寄语：
                      <span>{element.memberIntroduction}</span>
                    </p>
                  </Col>
                </Tooltip>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
