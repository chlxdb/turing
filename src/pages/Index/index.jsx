import React, { Component } from 'react'
import './index.css'
import { Row, Col, Card } from 'antd'
import axios from 'axios'

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
      notice: [],
    }

    /**s
     * 获取团队简介
     */
    axios.get(`http://150.158.171.105:7777/guest/introduction`).then((e) => {
      const teamintroduct = e.data.data[0]
      this.setState({ teamintroduct })
    })

    //   /**
    //    * 获取国保老师的信息
    //    */
    //   axios
    //     .get(`http://150.158.171.105:7777/guest/teacher/getTeacherById/1`)
    //     .then((e) => {
    //       const teacherguobao = e.data.data
    //       this.setState({ teacherguobao })
    //     })

    /**
     * 获取团队项目的信息
     */

    axios.get(`http://150.158.171.105:7777/guest/project`).then((e) => {
      console.log(e.data.data)
      const project = e.data.data.slice(0, 4)
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

    axios
      .get(`http://150.158.171.105:7777/guest/inform/top7Informs`)
      .then((e) => {
        console.log(e.data)
        const notice = e.data.data
        this.setState({ notice })
      })
    //   // 获取团队活动信息
    //   axios.get(`http://150.158.171.105:7777/guest/live`).then((e) => {
    //     console.log(e.data.data)
    //     const teamactive = e.data.data.slice(-4)
    //     this.setState({ teamactive })
    //   })
  }
  render() {
    const { teamintroduct } = this.state
    // 团队介绍
    // console.log(teamintroduct)
    // 国保老师的信息
    // console.log(teacherguobao)
    this.state.preFourAwards = Array.from(this.state.preFourAwards)
    // 最新的四个奖项
    // console.log(preFourAwards)
    // console.log(preFourTeamActivity)
    return (
      <div className="paper">
        <Row>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 15, offset: 3 }}
            lg={{ span: 15, offset: 3 }}
            xl={{ span: 10, offset: 2 }}
          >
            <video controls className="video">
              <source
                src={'http://150.158.171.105:7777/' + this.state.historyVideo}
                type="video/mp4"
              ></source>
            </video>
          </Col>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 15, offset: 3 }}
            lg={{ span: 15, offset: 3 }}
            xl={{ span: 10, offset: 1 }}
          >
            <p style={{ margin: '10% 0px 0px 0px' }}>
              {' '}
              {teamintroduct.historyInfo}
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Row>
            <Col
              xs={{ span: 18, offset: 3 }}
              sm={{ span: 18, offset: 6 }}
              md={{ span: 24, offset: 5 }}
              lg={{ span: 24, offset: 5 }}
              xl={{ span: 24, offset: 10 }}
            >
              <Card
                className="card"
                title="最近公告"
                extra={
                  <a style={{ color: 'white' }} href="#">
                    更多公告
                  </a>
                }
              >
                {this.state.notice.map((element, id) => {
                  return (
                    <Row>
                      <Col
                        className="notice-noout"
                        xs={{ span: 18 }}
                        sm={{ span: 20 }}
                        md={{ span: 20 }}
                        lg={{ span: 18 }}
                        xl={{ span: 20 }}
                        key={id}
                      >
                        {element.informContent}
                      </Col>
                      <Col>{element.informCreateTime}</Col>
                    </Row>
                  )
                })}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 10, offset: 3 }}
              sm={{ span: 6, offset: 8 }}
              md={{ span: 5, offset: 10 }}
              lg={{ span: 4, offset: 10 }}
              xl={{ span: 3, offset: 6, push: 16 }}
              className="right-col"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/icons/layers.svg"
                style={{
                  margin: '10% 0px 0px 0px',
                }}
              ></img>
            </Col>
            <Col
              xs={{ span: 10, offset: 3 }}
              sm={{ span: 10, offset: 3 }}
              md={{ span: 5, offset: 10 }}
              lg={{ span: 10, offset: 0 }}
              xl={{ span: 9, offset: 0, push: 16 }}
              style={{
                margin: '3% 0px 0px 0px',
              }}
            >
              <span className="right-text-head">团队成员</span>
              <Link className="link" to="/active">
                详情{'>>>'}
              </Link>
            </Col>

            <Col
              xs={{ span: 10, offset: 3 }}
              sm={{ span: 6, offset: 8 }}
              md={{ span: 5, offset: 10 }}
              lg={{ span: 4, offset: 10 }}
              xl={{ span: 3, offset: 6, push: 16 }}
            >
              <img src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/icons/monitor.svg"></img>
            </Col>
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 8, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 10, offset: 0 }}
              xl={{ span: 9, offset: 0, push: 16 }}
            >
              <sapn className="right-text-head">团队荣誉</sapn>
              <Link className="link" to="/honor">
                详情{'>>>'}
              </Link>
            </Col>
            <Col
              xs={{ span: 10, offset: 3 }}
              sm={{ span: 6, offset: 8 }}
              md={{ span: 5, offset: 10 }}
              lg={{ span: 4, offset: 10 }}
              xl={{ span: 3, offset: 6, push: 16 }}
            >
              <img src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/icons/cloud.svg"></img>
            </Col>

            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 8, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 10, offset: 0 }}
              xl={{ span: 9, offset: 0, push: 16 }}
            >
              <span className="right-text-head">团队活动</span>
              <Link className="link" to="/active">
                详情{'>>>'}
              </Link>
            </Col>
          </Row>
        </Row>
        <br /> <br /> <br /> <br />
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={{ span: 10, offset: 3 }}
            xl={{ span: 5 }}
            style={{ margin: '50px' }}
          >
            {' '}
            <span className="right-text-head"> 团队项目</span>
          </Col>
        </Row>
        <Row style={{ margin: '2%' }}>
          {this.state.project.map((element, id) => {
            return (
              <Col
                xs={{ span: 15, offset: 5 }}
                sm={{ span: 15, offset: 4 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 1 }}
                xl={{ span: 5 }}
                key={id}
              >
                <Link to={`/projectdetail/${element.projectId}`}>
                  <img
                    className="project-img"
                    alt="example"
                    src={'http://150.158.171.105:7777/' + element.projectGif}
                  />
                </Link>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  sm={{ span: 24, offset: 0 }}
                  md={{ span: 24, offset: 0 }}
                  lg={{ span: 24, offset: 0 }}
                  xl={{ span: 24, offset: 0 }}
                  key={id}
                >
                  <Link to={`/projectdetail/${element.projectId}`}>
                    <h1 className="project_content">{element.projectName}</h1>
                  </Link>
                </Col>
              </Col>
            )
          })}
        </Row>
        <Link to="/project" className=" link">
          查看全部项目{'>>>'}
        </Link>
      </div>
    )
  }
}
