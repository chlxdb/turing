import React, { Component } from 'react'
import { Row, Col, Card, Carousel } from 'antd'
import './honor.css'
import axios from 'axios'
import Slider from 'react-slick'

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
    var settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    }
    const { honorlists } = this.state
    return (
      <div>
        <div>
          <h2>Adaptive height</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
              <p>Hello</p>
            </div>
            <div>
              <h3>3</h3>
              <p>See ....</p>
              <p>Height is adaptive</p>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
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
          )
        })}
      </div>
    )
  }
}
