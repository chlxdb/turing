import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'

import { Card, Row, Col } from 'antd'
import { Pagination } from 'antd'
import { Tooltip } from 'antd'
import { Avatar } from 'antd'

const { Meta } = Card

export default class All extends Component {
  constructor(props) {
    super(props)

    this.state = {
      all: [],
      datalength: 10,
    }

    axios
      .get(`http://www.turingteam.me:8081/guest/member/queryMember`)
      .then((e) => {
        console.log(e.data.data)
        this.setState({ datalength: e.data.data.Members })
      })
  }
  componentDidMount() {
    this.getall()
  }

  getall = () => {
    axios
      .get(
        'http://150.158.171.105:7777/guest/member/findAllMembersByPage?page=1&size=4'
      )
      .then((response) => {
        this.setState({ all: response.data.data.records })
      })
  }

  onChange = (page, pageSize) => {
    axios
      .get('http://150.158.171.105:7777/guest/member/findAllMembersByPage?', {
        params: {
          page: page,
          size: pageSize,
        },
      })
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
                  sm={{ span: 20, offset: 1 }}
                  md={{ span: 20, offset: 1 }}
                  lg={{ span: 20, offset: 1 }}
                  xl={{ span: 20, offset: 1 }}
                  key={id}
                >
                  <Card className="card_col">
                    <Meta
                      avatar={
                        <Avatar
                          size={50}
                          src={
                            'http://150.158.171.105:7777/' +
                            element.memberIconUrl
                          }
                        />
                      }
                      title={
                        element.memberName + ' : ' + element.memberDirection
                      }
                    />
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
