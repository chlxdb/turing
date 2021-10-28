import React, { Component } from 'react'
import './index.css'
import { Row, Col, Card, Carousel } from 'antd'
import axios from 'axios'

import { Link } from 'react-router-dom'
import project from './project1.png'
import notice from './notice1.png'
import notice2 from './notice2.png'
import intro from './intro.png'

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
        const notice = e.data.data.slice(0, 3)
        this.setState({ notice })
      })
  }
  render() {
    const { teamintroduct } = this.state

    this.state.preFourAwards = Array.from(this.state.preFourAwards)

    return (
      <div>
        <Row>
          <Col
            className="col_introduce"
            xs={{ span: 10, offset: 3 }}
            sm={{ span: 8, offset: 3 }}
            md={{ span: 5, offset: 3 }}
            lg={{ span: 10, offset: 3 }}
            xl={{ span: 9, offset: 3 }}
          >
            {' '}
            <img src={intro} className="left_img"></img>
            <span className="left-text-introduce"> 团队简介</span>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 15, offset: 3 }}
            lg={{ span: 15, offset: 3 }}
            xl={{ span: 12, offset: 3 }}
          >
            <div>
              <video controls className="video">
                <source
                  src={'http://150.158.171.105:7777/' + this.state.historyVideo}
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </Col>
          <Col
            className="introduct"
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 15, offset: 3 }}
            lg={{ span: 15, offset: 3 }}
            xl={{ span: 5, offset: 1 }}
          >
            <p> {teamintroduct.historyInfo}</p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col
            xs={{ span: 12, offset: 3 }}
            sm={{ span: 12, offset: 3 }}
            md={{ span: 12, offset: 3 }}
            lg={{ span: 10, offset: 3 }}
            xl={{ span: 3, offset: 3 }}
            style={{}}
          >
            {' '}
            <img src={notice2} className="left_img"></img>
            <span className="left-text-project"> 团队通告</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 6 }}
            md={{ span: 24, offset: 5 }}
            lg={{ span: 24, offset: 5 }}
            xl={{ span: 9, offset: 0 }}
          >
            <Link to="/notice">
              <Card className="card" hoverable>
                {this.state.notice.map((element, id) => {
                  return (
                    <Row>
                      <Col
                        className="notice-noout"
                        xs={{ span: 18 }}
                        sm={{ span: 20 }}
                        md={{ span: 20 }}
                        lg={{ span: 18 }}
                        xl={{ span: 15 }}
                        key={id}
                      >
                        <img src={notice} className="img_notice"></img>
                        {element.informContent}
                        看见发士大夫地方看见发士大夫地方看见发士大夫地方看见发士大夫地方看见发士大夫地方看见发士大夫地方
                      </Col>
                      <Col
                        className="notice-noout"
                        xs={{ span: 18 }}
                        sm={{ span: 20 }}
                        md={{ span: 20 }}
                        lg={{ span: 18 }}
                        xl={{ span: 5, offset: 2 }}
                        key={id}
                      >
                        {element.informCreateTime}
                      </Col>
                    </Row>
                  )
                })}
                <Link to="/notice">
                  <Col
                    xs={{ span: 18 }}
                    sm={{ span: 20 }}
                    md={{ span: 20 }}
                    lg={{ span: 18 }}
                    xl={{ span: 9 }}
                  >
                    更多通告{'>>>'}
                  </Col>
                </Link>
              </Card>
            </Link>
          </Col>
        </Row>
        <br /> <br /> <br /> <br />
        <Row>
          <Col
            xs={{ span: 12, offset: 3 }}
            sm={{ span: 12, offset: 3 }}
            md={{ span: 12, offset: 3 }}
            lg={{ span: 10, offset: 3 }}
            xl={{ span: 5, offset: 3 }}
            style={{}}
          >
            {' '}
            <img src={project} className="left_img"></img>
            <span className="left-text-project"> 团队项目</span>
          </Col>
        </Row>
        <Row style={{ margin: '2%' }}>
          {this.state.project.map((element, id) => {
            return (
              <Col
                xs={{ span: 15, offset: 4 }}
                sm={{ span: 15, offset: 4 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 9, offset: 2 }}
                key={id}
              >
                <Link to={`/projectdetail/${element.projectId}`}>
                  <Card hoverable style={{ wordBreak: 'break-all' }}>
                    <Carousel autoplay>
                      <img
                        className="project-img"
                        alt="example"
                        src={
                          'http://150.158.171.105:7777/' + element.projectGif
                        }
                      ></img>
                    </Carousel>
                  </Card>
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
        <Row>
          <Col
            xs={{ span: 8, offset: 12 }}
            sm={{ span: 5, offset: 15 }}
            md={{ span: 5, offset: 18 }}
            lg={{ span: 5, offset: 19 }}
            xl={{ span: 5, offset: 19 }}
            style={{ marginBottom: '5%' }}
          >
            <Link to="/project" className=" link">
              查看全部项目{'>>>'}
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}
