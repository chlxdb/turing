import React, { Component } from 'react'
import { Button, Divider } from 'antd'
import { Card } from 'element-react'
import 'element-theme-default'

import './join.css'

export default class join extends Component {
  // 此处是一个打印的方法  可以在点击事件的时候调用
  dayin = () => {
    window.print() //调用浏览器的打印预览
  }
  render() {
    return (
      <div class="join">
        <Card>
          <div id="print" ref={(el) => (this.printRef = el)}>
            <h5>图灵智能创新团队招新简历</h5>
          </div>
          <Divider />
          <Button onClick={this.dayin}>打印</Button>
        </Card>
      </div>
    )
  }
}
