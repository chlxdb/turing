import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { List, Card, Row, Col } from 'antd'

export default class scaletea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: {},
    }

    axios
      .get(`http://150.158.171.105:7777/guest/teacher/getAllTeachers`)
      .then((e) => {
        const teachers = e.data.data
        this.setState({ teachers })
      })
  }

  render() {
    // 老师们的信息
    this.state.teachers = Array.from(this.state.teachers)
    console.log(this.state.teachers)
    return (
      <div>
        <div className="box_div">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 2,
            }}
          >
            {this.state.teachers.map((element, id) => {
              return (
                <List.Item>
                  <Card
                    style={{ wordBreak: 'break-all' }}
                    key={id}
                    title={
                      element.teacherName + ' : ' + element.teacherPosition
                    }
                  >
                    <Row>
                      <Col span={4}>
                        <img
                          style={{ width: '60%' }}
                          src={
                            'http://150.158.171.105:7777/' + element.teacherImg
                          }
                        ></img>
                      </Col>
                      <Col span={20} style={{ textIndent: '50px' }}>
                        {' '}
                        <p>{element.teacherResearch}</p>
                        <p>{element.teacherAwardIntroduction}</p>
                        <p>{element.teacherScientificResearch}</p>
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )
            })}
          </List>
        </div>
      </div>
    )
  }
}
