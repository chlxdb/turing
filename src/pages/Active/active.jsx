import React, { Component } from 'react'

import axios from 'axios'
import { Carousel } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

export default class active extends Component {
  constructor() {
    super()
    this.state = {
      teamactive: [],
      img: [], // 图片数组
      showIndex: 0, //显示第几个图片
      timer: null, // 定时器
      show: false, // 前后按钮显示
    }
  }

  componentDidMount() {
    this.get()
  }
  get = () => {
    axios.get(`http://150.158.171.105:7777/guest/live`).then((e) => {
      console.log(e.data.data)
      const teamactive = e.data.data

      for (var i = 0; i < teamactive.length; i++) {
        var arr = teamactive[i].livePhotos
      }
      console.log(arr)
      this.setState({ teamactive })
    })
  }
  render() {
    return (
      <Carousel autoplay>
        {/* {this.state.teamactive.livePhotos.map((element, id) => {
          return (
            <div key={id}>
              <img
                src={'http://150.158.171.105:7777/' + element.memberIconUrl}
                alt="轮播图"
              />
            </div>
          )
        })} */}
      </Carousel>
    )
  }
}
