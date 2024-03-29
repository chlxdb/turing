import React, { Component } from 'react'
import axios from 'axios'
import './scale.css'
import { Card, Row, Col } from 'antd'
import { Pagination } from 'antd'
import { Tooltip } from 'antd'
import { Avatar } from 'antd'

const { Meta } = Card
export default class Cv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      all: [],
      datalength: 10,
    }

    axios
      .get(
        `https://www.turingteam.me:8081/guest/member/queryMemberByDirection?direction=%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89`
      )
      .then((e) => {
        console.log(e.data.data)
        this.setState({ datalength: e.data.data.Members.length })
      })
  }
  componentDidMount() {
    this.onChange(1, 4)
  }

  onChange = (page, pageSize) => {
    axios
      .get(
        'https://www.turingteam.me:8081/guest/member/queryMemberByDirection?direction=%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89&offset=' +
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
