import React, { Component } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './project.css'

import { Card, Carousel } from 'antd'

const contentStyle = {
  width: '70vw',
}
export default class project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    axios
      .get(`http://www.turingteam.me:8081/guest/project/queryProject`)
      .then((e) => {
        const projects = e.data.data.Projects
        console.log(projects)
        this.setState({ projects })
        // console.log(projects)
      })
  }

  render() {
    const { projects } = this.state
    return (
      <div>
        <Row className="box_row">
          {projects.map((element, id) => {
            return (
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 11, offset: 7 }}
                xl={{ span: 10, offset: 1 }}
              >
                <Card hoverable className="card_project">
                  <Carousel autoplay>
                    <div style={contentStyle}>
                      <img
                        className="img"
                        alt="example"
                        src={
                          'http://www.turingteam.me:8081/' + element.projectGif
                        }
                      ></img>
                    </div>
                  </Carousel>
                </Card>
                <Col
                  key={id}
                  className="col_liveContent"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 20, offset: 2 }}
                  md={{ span: 18, offset: 3 }}
                  lg={{ span: 18, offset: 3 }}
                  xl={{ span: 24, offset: 0 }}
                >
                  <h1>{element.projectName}</h1>

                  <Link to={`/projectdetail/${element.projectId}`}>
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
