import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { List, Card, Row, Col } from 'antd'

export default class scaletea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: [],
    }

    axios
      .get(`http://www.turingteam.me:8081/guest/teacher/queryTeacher`)
      .then((e) => {
        const teachers = e.data.data.Teachers
        console.log(teachers)
        this.setState({ teachers })
      })
  }

  render() {
    // 老师们的信息

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
                    className="card_teacher"
                    key={id}
                    title={
                      element.teacherName + ' : ' + element.teacherPosition
                    }
                  >
                    <Row>
                      <Col span={4}>
                        <img
                          className="img_teacher"
                          alt="none"
                          src={
                            'http://150.158.171.105:7777/' + element.teacherImg
                          }
                        ></img>
                      </Col>
                      <Col span={20} className="descrip_teacher">
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
