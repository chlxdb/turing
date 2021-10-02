import React, { Component } from 'react'
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
        this.setState({ honorlists })
      })
  }

  goRouter = (path) => {
    return () => {
      this.props.history.push({
        pathname: path,
        state: null,
      })
    }
  }

  render() {
    const { honorlists } = this.state
    console.log(honorlists)
    return (
      <div>
        <h3>HHHHHOR页面</h3>
      </div>
    )
  }
}
