import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'

import jpg from './01.jpg'
import { Link } from 'react-router-dom'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamintroduct: {},
      teacherguobao: {},
      preFourAwards: {},
      preFourTeamActivity: {},
    }

    /**
     * 获取团队简介
     */
    axios.get(`http://150.158.171.105:8080/guest/introduction`).then((e) => {
      const teamintroduct = e.data.data[0]
      this.setState({ teamintroduct })
    })

    /**
     * 获取国保老师的信息
     */
    axios
      .get(`http://150.158.171.105:8080/guest/teacher/getTeacherById/1`)
      .then((e) => {
        const teacherguobao = e.data.data
        this.setState({ teacherguobao })
      })
    // http://150.158.171.105:8080/guest/award/getAllAwards
    axios
      .get(`http://150.158.171.105:8080/guest/award/getAllAwards`)
      .then((e) => {
        const allAwards = e.data.awards
        // 取最新的四个奖项
        const preFourAwards = allAwards.slice(-4)
        this.setState({ preFourAwards })
      })
  }

  render() {
    const { teamintroduct, teacherguobao, preFourAwards, preFourTeamActivity } =
      this.state
    // 团队介绍
    console.log(teamintroduct)
    // 国保老师的信息
    console.log(teacherguobao)
    this.state.preFourAwards = Array.from(this.state.preFourAwards)
    // 最新的四个奖项
    console.log(preFourAwards)
    // 最新的四个活动（接口还没得）
    console.log(preFourTeamActivity)

    return (
      <div>
        <div
          style={{ width: '100%', height: '300px', backgroundColor: 'black' }}
        >
          <img
            style={{ width: '100%', height: '300px', opacity: '0.4' }}
            src={jpg}
            alt="none"
          ></img>
        </div>
        <div style={{ margin: '15px' }}>
          <h>指导老师&&团队介绍</h>
          <Row>
            <Col span={3} style={{ margin: '12px' }}>
              <br />
              <br />

              <img
                style={{ width: '80%', height: '150px' }}
                src="http://150.158.171.105:8080/teacherIcon/徐国保.jpg"
              ></img>
              <p> {this.state.teacherguobao.teacherName}</p>
              <p> {this.state.teacherguobao.teacherJob}</p>
              <p> {this.state.teacherguobao.teacherPosition}</p>
            </Col>
            <Col span={7} style={{ margin: '20px' }}>
              <p> {this.state.teacherguobao.teacherResearch}</p>
              <p> {this.state.teacherguobao.teacherScientificResearch}</p>
            </Col>
            <Col span={10} style={{ margin: '15px' }}>
              <p> {this.state.teamintroduct.historyInfo}</p>
              <video controls style={{ width: '80%' }}>
                <source
                  src={'http://150.158.171.105:8080/' + this.state.historyVideo}
                  type="video/mp4"
                ></source>
              </video>
            </Col>
          </Row>
        </div>
        <div style={{ margin: '15px' }}>
          <h>团队荣誉</h>
          <Link to="/honor">
            {' '}
            <span>更多荣誉{'>>>'}</span>
          </Link>

          <Row style={{ height: '300px' }}>
            {this.state.preFourAwards.map((element, id) => {
              return (
                <Col span={6} key={id} style={{ margin: '' }}>
                  {/* < Link to={`/basic/detail/${element[0].id}`}> */}
                  {console.log(element.awardPhoto[0])}
                  <img
                    style={{ width: '100%', height: '250px' }}
                    alt="example"
                    src={'http://150.158.171.105:8080/' + element.awardPhoto[0]}
                  />
                  {/* </Link> */}
                </Col>
              )
            })}
          </Row>
        </div>
        <div style={{ margin: '15px' }}>
          <h>团队活动</h>
          <Link to="/honor">
            {' '}
            <span>更多活动{'>>>'}</span>
          </Link>
          <Row style={{ height: '300px' }}>
            <Col span={5} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p>图</p>
            </Col>
            <Col span={5} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col span={5} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
            <Col span={5} style={{ backgroundColor: 'grey', margin: '12px' }}>
              <p> 图 </p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
