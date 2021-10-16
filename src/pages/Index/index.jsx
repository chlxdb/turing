import React, { Component } from 'react'
import './index.css'
import { Row, Col, Badge } from 'antd'
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
      project: [],
      preFourTeamActivity: {},
      teamactive: [],
    }

    /**
     * 获取团队简介
     */
    axios.get(`http://150.158.171.105:7777/guest/introduction`).then((e) => {
      const teamintroduct = e.data.data[0]
      this.setState({ teamintroduct })
    })

    /**
     * 获取国保老师的信息
     */
    axios
      .get(`http://150.158.171.105:7777/guest/teacher/getTeacherById/1`)
      .then((e) => {
        const teacherguobao = e.data.data
        this.setState({ teacherguobao })
      })

    /**
     * 获取团队项目的信息
     */

    axios.get(`http://150.158.171.105:7777/guest/project`).then((e) => {
      console.log(e.data.data)
      const project = e.data.data
      this.setState({ project })
    })

    axios
      .get(`http://150.158.171.105:7777/guest/award/getAllAwards`)
      .then((e) => {
        const allAwards = e.data.awards
        // 取最新的四个奖项
        const preFourAwards = allAwards.slice(-4)
        this.setState({ preFourAwards })
      })

    // 获取团队活动信息
    axios.get(`http://150.158.171.105:7777/guest/live`).then((e) => {
      console.log(e.data.data)
      const teamactive = e.data.data.slice(-4)
      this.setState({ teamactive })
    })
  }
  render() {
    const { teamintroduct, teacherguobao } = this.state
    // 团队介绍
    // console.log(teamintroduct)
    // 国保老师的信息
    // console.log(teacherguobao)
    this.state.preFourAwards = Array.from(this.state.preFourAwards)
    // 最新的四个奖项
    // console.log(preFourAwards)
    // console.log(preFourTeamActivity)

    return (
      <div style={{ textAlign: 'center' }}>
        <div
          className="flash-container"
          style={{ width: '100%', height: '300px', backgroundColor: 'black' }}
        >
          <img
            style={{ width: '100%', height: '300px', opacity: '0.4' }}
            src={jpg}
            alt="none"
          ></img>
        </div>

        <div
          style={{
            boxShadow: '0px 6px 12px -4px #888888',
            margin: '15px',
          }}
        >
          <h
            style={{
              color: '#515a6e',
              fontSize: '26px',
            }}
          >
            团队简介
          </h>
          <Row>
            <Col span={10} style={{ margin: '15px' }}>
              <p> {teamintroduct.historyInfo}</p>
            </Col>
            <Col span={10}>
              <video controls style={{ width: '80%' }}>
                <source
                  src={'http://150.158.171.105:7777/' + this.state.historyVideo}
                  type="video/mp4"
                ></source>
              </video>
            </Col>
          </Row>
        </div>
        <div
          style={{
            boxShadow: '0px 6px 12px -4px #888888',
            marginLeft: '15px',
          }}
        >
          <h
            style={{
              color: '#515a6e',
              fontSize: '26px',
            }}
          >
            指导老师
          </h>

          <Row>
            <Col span={3} style={{ margin: '15px' }}>
              <br />
              <br />

              <img
                style={{
                  marginTop: '-45px',
                  width: '70%',
                  height: '150px',
                  verticalAalign: 'middle',
                }}
                src="http://150.158.171.105:7777/teacherIcon/徐国保.jpg"
              ></img>
            </Col>
            <Col span={15} style={{ margin: '0px' }}>
              <p>
                {' '}
                {teacherguobao.teacherName} /
                <sapn> {teacherguobao.teacherJob}</sapn>/
                <sapn> {teacherguobao.teacherPosition}</sapn>
              </p>

              <p style={{ textIndent: '50px' }}>
                {' '}
                {teacherguobao.teacherResearch}
              </p>
              <p style={{ textIndent: '50px' }}>
                {' '}
                {teacherguobao.teacherScientificResearch}
              </p>
            </Col>
          </Row>
          <Link to="/scaleteacher"> 查看全部教师{'>>>'}</Link>
        </div>

        <div style={{ boxShadow: '0px 6px 12px -4px #888888', margin: '15px' }}>
          <h
            style={{
              color: '#515a6e',
              fontSize: '26px',
            }}
          >
            团队荣誉
          </h>

          <Row style={{ height: '300px', textAlign: 'center' }}>
            {this.state.preFourAwards.map((element, id) => {
              return (
                <Col span={5} key={id} style={{ margin: '20px' }}>
                  <img
                    style={{ width: '100%', height: '250px' }}
                    alt="example"
                    src={'http://150.158.171.105:7777/' + element.awardPhoto[0]}
                  />
                </Col>
              )
            })}
          </Row>
          <Link to="/honor"> 查看全部荣誉{'>>>'}</Link>
        </div>

        <div style={{ boxShadow: '0px 6px 12px -4px #888888', margin: '15px' }}>
          <h
            style={{
              color: '#515a6e',
              fontSize: '26px',
            }}
          >
            团队项目
          </h>

          <Row style={{ height: '250px' }}>
            {this.state.project.map((element, id) => {
              return (
                <Col span={5} key={id} style={{ margin: '15px' }}>
                  <Link to={`/projectdetail/${element.projectId}`}>
                    <img
                      style={{ width: '100%', height: '250px' }}
                      alt="example"
                      src={
                        'http://150.158.171.105:7777/' +
                        element.projectPhotos[0].projectPhotoLoc
                      }
                    />
                  </Link>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '15px' }}>
            {this.state.project.map((element, id) => {
              return (
                <Col span={5} key={id} style={{ margin: '15px' }}>
                  <Link to={`/projectdetail/${element.projectId}`}>
                    <h
                      style={{
                        fontSize: '23px',

                        color: '#515a6e',
                      }}
                    >
                      {element.projectName}
                    </h>
                  </Link>
                </Col>
              )
            })}
          </Row>
          <Link to="/project">查看全部项目{'>>>'}</Link>
        </div>
        <div style={{ boxShadow: '0px 6px 12px -4px #888888', margin: '15px' }}>
          <a
            style={{
              color: '#515a6e',
              fontSize: '26px',
            }}
          >
            团队活动
          </a>

          <Row style={{ height: '250px' }}>
            {this.state.teamactive.map((element, id) => {
              return (
                <Col span={5} key={id} style={{ margin: '15px' }}>
                  {/* < Link to={`/basic/detail/${element[0].id}`}> */}
                  <img
                    style={{ width: '100%', height: '250px' }}
                    alt="example"
                    src={
                      'http://150.158.171.105:7777/' +
                      element.livePhotos[id].livePhotoLoc
                    }
                  />
                  {/* </Link> */}
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '15px', textAlign: 'center' }}>
            {this.state.teamactive.map((element, id) => {
              return (
                <Col span={5} key={id} style={{ margin: '15px' }}>
                  <a
                    style={{
                      fontSize: '23px',

                      color: '#515a6e',
                    }}
                  >
                    {element.liveName}
                  </a>
                </Col>
              )
            })}
          </Row>
          <Link to="/active">查看全部活动{'>>>'}</Link>
        </div>
      </div>
    )
  }
}
