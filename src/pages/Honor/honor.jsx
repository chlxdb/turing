import React, { Component } from 'react'
import { Row, Col, Badge } from 'antd'
import './honor.css'
import axios from 'axios'

export default class honor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      honorlists: [],
    }

    /**
     * 获取奖项的接口
     * 返回honorlists为奖项数组
     * 奖项具体信息请在控制台输出查看
     */
    axios
      .get(`http://150.158.171.105:8080/guest/award/getAllAwards`)
      .then((e) => {
        const honorlists = e.data.awards
        console.log(e.data.awards)
        this.setState({ honorlists })
      })
  }

  // goRouter = (path) => {
  //   return () => {
  //     this.props.history.push({
  //       pathname: path,
  //       state: null,
  //     })
  //   }
  // }

  render() {
    const { honorlists } = this.state
    return (
      <div>
        {honorlists.map((element, id) => {
          return (
            <div className="paper" key={id}>
              <Row style={{ margin: '0% 15%' }}>
                <Col span={24} style={{}}>
                  <h1
                    style={{
                      fontSize: '200%',
                      textAlign: 'center',

                      color: '#515a6e',
                    }}
                  >
                    {element.awardName}
                  </h1>
                </Col>
              </Row>
              <Row style={{ margin: '0 15%' }}>
                <Col span={12}>
                  <img
                    style={{
                      width: '100%',
                      height: '90%',
                      verticalAlign: 'middle',
                    }}
                    src={'http://150.158.171.105:7777/' + element.awardPhoto}
                    alt="none"
                  />
                </Col>
                <Col span={10} style={{ margin: '8% 3%' }}>
                  <h style={{ fontSize: '21px' }}>获奖成员:</h>
                  <p style={{ fontSize: '18px' }}>
                    {element.awardMember.map((value, index) => {
                      return value + ' '
                    })}
                  </p>
                  &nbsp;&nbsp;&nbsp;
                  <p> 时间：{element.awardTime}</p>
                </Col>
              </Row>
            </div>
          )
        })}
      </div>
    )
  }
}
