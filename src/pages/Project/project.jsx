import React, { Component } from 'react'
import { Row, Col, Badge } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './project.css'

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
    axios.get(`http://150.158.171.105:7777/guest/project`).then((e) => {
      const projects = e.data.data
      this.setState({ projects })
      console.log(projects)
    })
  }

  render() {
    const { projects } = this.state
    return (
      <div>
        {projects.map((element, id) => {
          return (
            <div className="paper" key={id}>
              <Link to={`/projectdetail/${element.projectId}`}>
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
                    {element.projectName}
                  </h1>
                  <p style={{ color: '', fontSize: '150%' }}>
                    {element.projectContent}
                  </p>
                </Col>
              </Row>
              <Row style={{ margin: '0 15%' }}>
                <Col span={24}>
                  <img
                    style={{ width: '100%', height: '60%' }}
                    src={'http://150.158.171.105:7777/' + element.projectGif}
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
