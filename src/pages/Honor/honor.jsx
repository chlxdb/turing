import React, { Component } from 'react'
import { Row, Col, Card, Carousel } from 'antd'
import './honor.css'
import axios from 'axios'

const contentStyle = {
  width: '60vw',
}
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

  render() {
    const { honorlists } = this.state
    return (
      <div>
        {honorlists.map((element, id) => {
          return (
            <Row key={id} className="box_row">
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 11, offset: 7 }}
                xl={{ span: 9, offset: 1 }}
              >
                <Card hoverable style={{ wordBreak: 'break-all' }}>
                  <Carousel autoplay>
                    <div style={contentStyle}>
                      <img
                        className="img"
                        alt="example"
                        src={
                          'http://150.158.171.105:7777/' + element.awardPhoto
                        }
                      ></img>
                    </div>
                  </Carousel>
                </Card>
              </Col>

              <Col
                className="col_liveContent"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 11, offset: 7 }}
                xl={{ span: 10, offset: 1 }}
                key={id}
              >
                <h1>{element.awardName}</h1>

                <h>获奖成员:</h>
                <p className="livecontent">
                  {element.awardMember.map((value, index) => {
                    return value + ' '
                  })}
                </p>

                <p> 时间：{element.awardTime}</p>
              </Col>
            </Row>
            // <div className="paper" key={id}>
            //   <Row style={{ margin: '0% 15%' }}>
            //     <Col span={24} style={{}}>
            //       <h1
            //         style={{
            //           fontSize: '200%',
            //           textAlign: 'center',

            //           color: '#515a6e',
            //         }}
            //       >
            //         {element.awardName}
            //       </h1>
            //     </Col>
            //   </Row>
            //   <Row style={{ margin: '0 15%' }}>
            //     <Col span={12}>
            //       <img
            //         style={{
            //           width: '100%',
            //           height: '90%',
            //           verticalAlign: 'middle',
            //         }}
            //         src={'http://150.158.171.105:7777/' + element.awardPhoto}
            //         alt="none"
            //       />
            //     </Col>
            //     <Col span={10} style={{ margin: '8% 3%' }}>
            //       <h style={{ fontSize: '21px' }}>获奖成员:</h>
            //       <p style={{ fontSize: '18px' }}>
            //         {element.awardMember.map((value, index) => {
            //           return value + ' '
            //         })}
            //       </p>
            //       &nbsp;&nbsp;&nbsp;
            //       <p> 时间：{element.awardTime}</p>
            //     </Col>
            //   </Row>
            // </div>
          )
        })}
      </div>
    )
  }
}
