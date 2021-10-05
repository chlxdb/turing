import React, { Component } from 'react'
import { Button, Divider, Row, Col, Input, Modal, Popover } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { Card } from 'element-react'
import 'element-theme-default'
import axios from 'axios'
import ReactToPrint from 'react-to-print'

import evaluation from './img/evaluation.png'
import class1 from './img/class1.png'
import direction from './img/direction.png'
import evaluation1 from './img/evaluation1.png'
import expectation from './img/expectation.png'
import name from './img/name.png'
import number from './img/number.png'
import other from './img/other.png'
import phone from './img/phone.png'
import skill from './img/skill.png'
import './join.css'

const IsPC = () => {
  var userAgentInfo = navigator.userAgent
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ]
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
export default class join extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholders: {
        title: '图灵智能创新团队创新组招新简历',
        buttonname: '切换创业组',
        skill: '高中是否有编程语言基础？或者在其它领域是否有较突出的技能？',
        experience: '是否有项目经验，若无请填暂无',
      },
      downloadurls: {},
      name: '',
      direction: '',
      number: '',
      phone: '',
      class: '',
      evaluation: '',
      skills: '',
      expectation: '',
      experience: '',
      others: '',
      visible: true,
      issubmit: false,
    }
    // 获取模板下载链接
    axios
      .get(`http://150.158.171.105:8080/guest/resume/getMobanUrl`)
      .then((e) => {
        const downloadurls = e.data
        this.setState({ downloadurls })
      })

    let secondsToGo = 5
    const modal = Modal.info({
      title: '小提示',
      content: `点击标题下面的按钮可以在创新组和创业组之间切换简历哦(${secondsToGo} 秒后自动关闭)`,
      centered: IsPC() ? false : true,
    })
    const timer = setInterval(() => {
      secondsToGo -= 1
      if (secondsToGo)
        modal.update({
          content: `点击标题下面的按钮可以在创新组和创业组之间切换简历哦(${secondsToGo} 秒后自动关闭)`,
        })
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
      modal.destroy()
    }, secondsToGo * 1000)
  }

  handlenamechange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  handledirectionchange = (e) => {
    this.setState({
      direction: e.target.value,
    })
  }
  handlenumberchange = (e) => {
    this.setState({
      number: e.target.value,
    })
  }
  handlephonechange = (e) => {
    this.setState({
      phone: e.target.value,
    })
  }
  handleclasschange = (e) => {
    this.setState({
      class: e.target.value,
    })
  }
  handleevaluationchange = (e) => {
    this.setState({
      evaluation: e.target.value,
    })
  }
  handleskillschange = (e) => {
    this.setState({
      skills: e.target.value,
    })
  }
  handleexpectationchange = (e) => {
    this.setState({
      expectation: e.target.value,
    })
  }
  handleexperiencechange = (e) => {
    this.setState({
      experience: e.target.value,
    })
  }
  handleotherschange = (e) => {
    this.setState({
      others: e.target.value,
    })
  }

  checkagain = () => {
    if (!IsPC()) {
      alert('请在电脑端打印！')
    }
  }
  // 模板切换
  change = () => {
    if (this.state.placeholders.buttonname === '切换创业组') {
      const placeholders = {
        title: '图灵智能创新团队创业组招新简历',
        buttonname: '切换创新组',
        skill: `以前是否在产品设计、PPT制作、策划书编写上这方面有一定基础？例如：之前是否有文档撰写和需求分析等经验，之前是否有演讲、商业策划、ppt制作、运营的经历，或者在其它领域是否有较突出的技能、证书？`,
        experience: '是否有一些社会实践或是参与过其他创业项目？',
      }
      this.setState({ placeholders })
    } else {
      const placeholders = {
        title: '图灵智能创新团队创新组招新简历',
        buttonname: '切换创业组',
        skill: '高中是否有编程语言基础？或者在其它领域是否有较突出的技能？',
        experience: '是否有项目经验，若无请填暂无',
      }
      this.setState({ placeholders })
    }
  }

  submit = () => {
    const {
      name,
      direction,
      number,
      phone,
      evaluation,
      skills,
      expectation,
      experience,
      others,
      issubmit,
    } = this.state
    axios({
      method: 'post',
      url: `http://150.158.171.105:8080/guest/resume/postEntrepreneurshipResume`,
      params: {
        resumeName: name,
        resumeStudentId: number,
        resumeTelephone: phone,
        resumeMajor: this.state.class,
        resumeDirect: direction,
        resumeEvaluation: evaluation,
        resumeSkills: skills,
        resumeExp: experience,
        resumeExpect: expectation,
        resumeOther: others,
      },
    }).then((res) => {
      let outputstring = ''
      for (let i in res.data) {
        outputstring += res.data[i] + '\n'
      }
      setTimeout(() => {
        alert(outputstring)
      }, 0)

      if (res.data.result === 'success') {
        this.setState({ issubmit: !issubmit })
      }
    })
  }
  // 模板下载
  downloadtemplate = () => {
    const { placeholders, downloadurls } = this.state
    let downloadElement = document.createElement('a')
    downloadElement.href =
      placeholders.title === '图灵智能创新团队创新组招新简历'
        ? 'http://150.158.171.105:8080' + downloadurls['创新组模板']
        : 'http://150.158.171.105:8080' + downloadurls['创业组模板']
    document.body.appendChild(downloadElement)
    downloadElement.click()
    document.body.removeChild(downloadElement)
  }

  render() {
    const { placeholders, issubmit } = this.state
    return (
      <div class="join" ref={(el) => (this.componentRef = el)}>
        <Card>
          <Row>
            {/* <Col span="6" className="mobile-nodisplay" />
            <Col span="12" xs={22} sm={18} md={12} lg={12}>
              <h5>{placeholders.title}</h5>
            </Col> */}
            <Col span="24">
              <h5>{placeholders.title}</h5>
            </Col>
          </Row>
          <Row>
            <Col span="24" className="no-print">
              <Button
                onClick={this.change}
                type="primary"
                ghost
                className="change-type-btn no-print"
              >
                {placeholders.buttonname}
              </Button>
            </Col>
          </Row>
          <Divider className="no-print" />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={evaluation} alt="" />
                <h1 class="col-title">个人信息</h1>
              </Row>
              <Row>
                <p class="col-english">Individual</p>
              </Row>
            </Col>
            <Col span="20">
              <Row>
                <Col
                  span="8"
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      class="col-img"
                      src={name}
                      alt=""
                      style={{ 'margin-left': 0 }}
                    />
                    <h1 class="col-title">姓名</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的姓名"
                    size="large"
                    onChange={this.handlenamechange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      class="col-img"
                      src={direction}
                      alt=""
                      style={{ 'margin-left': 0 }}
                    />
                    <h1 class="col-title">方向</h1>
                  </Row>
                  <Input
                    placeholder="可先不填"
                    size="large"
                    onChange={this.handledirectionchange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      class="col-img"
                      src={number}
                      alt=""
                      style={{ 'margin-left': 0 }}
                    />
                    <h1 class="col-title">学号</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的12位学号"
                    size="large"
                    onChange={this.handlenumberchange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      class="col-img"
                      src={phone}
                      alt=""
                      style={{ 'margin-left': 0 }}
                    />
                    <h1 class="col-title">电话</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的11位手机号码"
                    size="large"
                    onChange={this.handlephonechange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      class="col-img"
                      src={class1}
                      alt=""
                      style={{ 'margin-left': 0 }}
                    />
                    <h1 class="col-title">班级</h1>
                  </Row>
                  <Input
                    placeholder="如电气1202"
                    size="large"
                    onChange={this.handleclasschange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={evaluation1} alt="" />
                <h1 class="col-title">自我评价</h1>
              </Row>
              <Row>
                <p class="col-english">Evaluation</p>
              </Row>
            </Col>
            <Col span="20">
              <Input.TextArea
                id="myinput"
                placeholder="简单介绍一下自己，性格、兴趣爱好等等。你觉得你最大的优点是什么？"
                onChange={this.handleevaluationchange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={skill} alt="" />
                <h1 class="col-title">技能水平</h1>
              </Row>
              <Row>
                <p class="col-english">Skills</p>
              </Row>
            </Col>
            <Col span="20">
              <Input.TextArea
                placeholder={placeholders.skill}
                onChange={this.handleskillschange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={expectation} alt="" />
                <h1 class="col-title">期望</h1>
              </Row>
              <Row>
                <p class="col-english">Expectation</p>
              </Row>
            </Col>
            <Col span="20">
              <Input.TextArea
                placeholder="为什么想加入我们团队？ 你期望以后在团队里做怎么样的一个角色？以后想从事什么职业？简单说一说，你来到团队后的学习安排？"
                onChange={this.handleexpectationchange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={other} alt="" />
                <h1 class="col-title">项目经验</h1>
              </Row>
              <Row>
                <p class="col-english">Experience</p>
              </Row>
            </Col>
            <Col span="20">
              <Input.TextArea
                placeholder={placeholders.experience}
                onChange={this.handleexperiencechange}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img class="col-img" src={other} alt="" />
                <h1 class="col-title">其它</h1>
              </Row>
              <Row>
                <p class="col-english">Others</p>
              </Row>
            </Col>
            <Col span="20">
              <Input.TextArea
                placeholder="你还参加了哪些学生组织或社团面试？实验室有严格的管理条例，你觉得自己能适应吗？"
                onChange={this.handleotherschange}
              />
            </Col>
          </Row>
          <Divider className="no-print" />
          <Row className="no-print">
            <div style={{ margin: '0 auto 20px' }}>
              <Button
                onClick={this.submit}
                type="primary"
                style={{ marginRight: '1vw' }}
                disabled={issubmit}
              >
                {issubmit ? '已提交' : '提交'}
              </Button>
              {IsPC() ? (
                <ReactToPrint
                  trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return (
                      <Popover
                        content="拉动文本框右下角调整打印布局 ^_^"
                        placement="bottom"
                      >
                        <Button type="primary" style={{ marginRight: '1vw' }}>
                          打印
                        </Button>
                      </Popover>
                    )
                  }}
                  content={() => this.componentRef}
                />
              ) : (
                <Button
                  type="primary"
                  style={{ marginRight: '1vw' }}
                  onClick={this.checkagain}
                >
                  打印
                </Button>
              )}
              <Popover content="备用方案 @_@" placement="bottom">
                <Button
                  onClick={this.downloadtemplate}
                  type="primary"
                  icon={<DownloadOutlined />}
                >
                  模板下载
                </Button>
              </Popover>
            </div>
          </Row>
        </Card>
      </div>
    )
  }
}
