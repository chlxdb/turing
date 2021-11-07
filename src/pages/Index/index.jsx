import React, { Component } from 'react'
import './index.css'
import { Row, Col, Card, Carousel, Button } from 'antd'
import axios from 'axios'
import Slider from 'react-slick'

import { Link } from 'react-router-dom'
import project from './project1.png'
import notice2 from './notice2.png'
import intro from './intro.png'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
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
      let player = document.querySelector('#myvideo')
      player.src =
        'http://150.158.171.105:7777/' + this.state.teamintroduct.historyVideo
      // player.play()
      /* this.$myvideo.src =
        'http://150.158.171.105:7777/' + this.state.teamintroduct.historyVideo*/
    })

    /**
     * 获取团队项目的信息
     */

    axios.get(`http://150.158.171.105:7777/guest/project`).then((e) => {
      const project = e.data.data.slice(0, 4)
      this.setState({ project })
    })

    axios
      .get(`http://150.158.171.105:7777/guest/inform/top7Informs`)
      .then((e) => {
        const notice = e.data.data
        this.setState({ notice })
      })
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    const settings = {
      speed: 200,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    }

    const { teamintroduct } = this.state

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
            <img src={intro} alt="none" className="left_img"></img>
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
              <video controls="controls" className="video" id="myvideo"></video>
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
            <img src={notice2} alt="none" className="left_img"></img>
            <span className="left-text-project"> 团队通告</span>
          </Col>

          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 6 }}
            md={{ span: 24, offset: 5 }}
            lg={{ span: 24, offset: 5 }}
            xl={{ span: 15, offset: 5 }}
          >
            <Card className="card_index" hoverable>
              <Button className="btn_honor" danger onClick={this.previous}>
                Previous
              </Button>
              <div>
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {this.state.notice.map((element, id) => {
                    return (
                      <Row>
                        <Col
                          key={id}
                          className="notice-noout_index"
                          xs={{ span: 18, offset: 2 }}
                          sm={{ span: 20, offset: 2 }}
                          md={{ span: 20, offset: 2 }}
                          lg={{ span: 18, offset: 2 }}
                          xl={{ span: 15, offset: 4 }}
                        >
                          {element.informContent}{' '}
                        </Col>
                        <Col
                          className="notice-noout"
                          xs={{ span: 18, offset: 2 }}
                          sm={{ span: 20, offset: 2 }}
                          md={{ span: 20, offset: 2 }}
                          lg={{ span: 18, offset: 2 }}
                          xl={{ span: 15, offset: 4 }}
                        >
                          {element.informCreateTime}
                        </Col>
                      </Row>
                    )
                  })}
                </Slider>
              </div>

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
              <Button className="btn_honor" danger onClick={this.next}>
                TheNext
              </Button>
            </Card>
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
            <img src={project} alt="none" className="left_img"></img>
            <span className="left-text-project"> 团队项目</span>
          </Col>
        </Row>
        <Row style={{ margin: '2%' }}>
          {this.state.project.map((element, id) => {
            return (
              <Col
                key={id}
                xs={{ span: 15, offset: 4 }}
                sm={{ span: 15, offset: 4 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                xl={{ span: 9, offset: 2 }}
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
