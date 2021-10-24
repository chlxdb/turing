import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { List, Card, Row, Col } from 'antd'
import { Pagination } from 'antd'
import { Tooltip } from 'antd'

import '../Leaderdetail/leaderdetail.css'

const { Meta } = Card
export default class Nlp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      all: [],
      datalength: 10,
    }
  }
  componentDidMount() {
    this.getall()
  }
  getall = () => {
    axios
      .get(
        'http://150.158.171.105:7777/guest/member/findMembersByTechnology?technology=%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86&page=1&size=4'
      )
      .then((response) => {
        this.setState({ all: response.data.data.records })
        this.setState({ datalength: response.data.data.total })
      })
  }
  onChange = (page, pageSize) => {
    axios
      .get(
        'http://150.158.171.105:7777/guest/member/findMembersByTechnology?technology=%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86&page=' +
          page +
          '&size=' +
          pageSize,
        {}
      )
      .then((response) => {
        console.log(response.data.data.records)
        this.setState({ all: response.data.data.records })
      })
  }

  render() {
    return (
      <div>
        <div className="box_div">
          <Row>
            {this.state.all.map((element, id) => {
              return (
                <Col
                  xs={{ span: 20, offset: 1 }}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 10, offset: 1 }}
                  lg={{ span: 5, offset: 1 }}
                  xl={{ span: 5, offset: 1 }}
                  key={id}
                >
                  <Card
                    hoverable
                    style={{ wordBreak: 'break-all' }}
                    title={
                      element.memberName + ' : ' + element.memberTechnology
                    }
                  >
                    <Row>
                      <Col
                        xs={{ span: 15, offset: 3 }}
                        sm={{ span: 15, offset: 3 }}
                        md={{ span: 10, offset: 1 }}
                        lg={{ span: 20, offset: 1 }}
                        xl={{ span: 15, offset: 4 }}
                      >
                        <img
                          style={{ width: '100%', height: '100%' }}
                          src={
                            'http://150.158.171.105:7777/' +
                            element.memberIconUrl
                          }
                        ></img>
                      </Col>
                      <Tooltip
                        placement="bottom"
                        title={element.memberIntroduction}
                      >
                        <Col
                          className="card_col"
                          xs={{ span: 20, offset: 3 }}
                          sm={{ span: 20, offset: 3 }}
                          md={{ span: 10, offset: 1 }}
                          lg={{ span: 20, offset: 1 }}
                          xl={{ span: 20, offset: 1 }}
                        >
                          {element.memberIntroduction}
                        </Col>
                      </Tooltip>
                    </Row>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>

        <Row>
          <Col
            xs={{ span: 20, offset: 3 }}
            sm={{ span: 20, offset: 3 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 20, offset: 1 }}
            xl={{ span: 20, offset: 1 }}
          >
            <Pagination
              defaultPageSize={4}
              onChange={this.onChange}
              defaultCurrent={1}
              total={this.state.datalength}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
