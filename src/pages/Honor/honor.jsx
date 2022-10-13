import React, { Component } from 'react'
// import { Row, Col, Card, Button } from 'antd'

import './honor.css'
// import axios from 'axios'
// import Slider from 'react-slick'

export default class honor extends Component {
  // constructor(props) {
  //   super(props)
  // this.next = this.next.bind(this)
  // this.previous = this.previous.bind(this)
  // this.state = {
  //   honorlists: [],
  // }

  /**
   * 获取奖项的接口
   * 返回honorlists为奖项数组
   * 奖项具体信息请在控制台输出查看
   */
  // axios
  //   .get(`https://www.turingteam.me:8081/guest/award/awardQuery`)
  //   .then((e) => {
  //     const honorlists = e.data.data.awards
  //     console.log(e.data.data.awards)
  //     this.setState({ honorlists })
  //   })
  //}
  // next() {
  //   this.slider.slickNext()
  // }
  // previous() {
  //   this.slider.slickPrev()
  // }

  render() {
    // var settings = {
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // }
    // const { honorlists } = this.state
    return (
      <div style={{ height: '100vh' }}>暂不展示</div>
      // <div className="slider_div">
      //   <Slider ref={(c) => (this.slider = c)} {...settings}>
      //     {honorlists.map((element, id) => {
      //       return (
      //         <div>
      //           <Row key={id} className="box_row">
      //             <Col
      //               xs={{ span: 12, offset: 6 }}
      //               sm={{ span: 12, offset: 6 }}
      //               md={{ span: 18, offset: 3 }}
      //               lg={{ span: 11, offset: 7 }}
      //               xl={{ span: 12, offset: 6 }}
      //             >
      //               <Card hoverable style={{ wordBreak: 'break-all' }}>
      //                 <img
      //                   className="img"
      //                   alt="example"
      //                   src={
      //                     'https://www.turingteam.me:8081/' +
      //                     element.awardPhotoUrl[0]
      //                   }
      //                 ></img>
      //               </Card>
      //             </Col>
      //           </Row>
      //           <Row>
      //             <Col
      //               className="col_liveContent"
      //               xs={{ span: 20, offset: 2 }}
      //               sm={{ span: 20, offset: 2 }}
      //               md={{ span: 18, offset: 3 }}
      //               lg={{ span: 11, offset: 7 }}
      //               xl={{ span: 12, offset: 6 }}
      //               key={id}
      //             >
      //               <h1>{element.awardName}</h1>
      //               <h>获奖成员:</h>
      //               <span className="livecontent">
      //                 {element.memberName.map((value, index) => {
      //                   return value + ' '
      //                 })}
      //               </span>
      //               &nbsp;
      //               <span className="honor_time"> {element.awardTime}</span>
      //             </Col>
      //           </Row>
      //         </div>
      //       )
      //     })}
      //   </Slider>
      // </div>
    )
  }
}
