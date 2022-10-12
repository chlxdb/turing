import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { Card, Row, Col } from 'antd'
import { Pagination } from 'antd'
import { Tooltip } from 'antd'
import { Avatar } from 'antd'
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
        'https://www.turingteam.me:8081/guest/member/queryMemberByDirection?direction=%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86&offset=4&page=1'
      )
      .then((response) => {
        // console.log(response.data.data.Members)
        this.setState({ all: response.data.data.Members })
        this.setState({ datalength: response.data.data.Members.length })
      })
  }
  onChange = (page, pageSize) => {
    axios
      .get(
        'https://www.turingteam.me:8081/guest/member/queryMemberByDirection?direction=%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86&offset=' +
          pageSize +
          '&page=' +
          page,
        {}
      )
      .then((response) => {
        this.setState({ all: response.data.data.Members })
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
                            'https://www.turingteam.me:8081/' +
                            element.memberIconUrl
                          }
                        />
                      }
                      title={element.memberName + ' : ' + element.memberMajor}
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
