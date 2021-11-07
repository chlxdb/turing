import { Link } from 'react-router-dom'
import ViewRouter from './router/index'
// 封装好的路由

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Row, Col } from 'antd'

import jpg from './logo.jpg'
import gif from './logo1.gif'
import app from './turing_app.jpg'
import index from './index.png'
import leader from './leader.png'
import project from './project1.png'
import honor from './honor.png'
import active from './active.png'
import join from './join.png'
import meber from './meber.png'
import './App.css'

import { Layout, Menu } from 'antd'
import React, { Component } from 'react'

const { Header, Footer, Content } = Layout
const { SubMenu } = Menu

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Menu className="nar" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item
                key={8}
                style={{
                  marginLeft: '8%',

                  fontSize: '1.4vw',
                }}
                className="turing-title"
              >
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={jpg}
                  alt="none"
                ></img>{' '}
                图灵智能创新团队
              </Menu.Item>
              <Link to="/index" className="menus">
                <Menu.Item style={{}} key={1}>
                  <img style={{ width: '1.5vw' }} alt="none" src={index}></img>
                  首页
                </Menu.Item>
              </Link>
              <Link to="/leader" className="menus">
                <Menu.Item style={{}} key={3}>
                  <img style={{ width: '1.5vw' }} alt="none" src={leader}></img>
                  领导视察
                </Menu.Item>
              </Link>
              <Link to="/project" className="menus">
                <Menu.Item style={{}} key={5}>
                  <img
                    style={{ width: '1.5vw' }}
                    alt="none"
                    src={project}
                  ></img>
                  团队项目
                </Menu.Item>
              </Link>
              <Link to="/honor" className="menus">
                <Menu.Item style={{}} key={6}>
                  <img style={{ width: '1.5vw' }} alt="none" src={honor}></img>
                  团队荣誉
                </Menu.Item>
              </Link>
              <Link to="/active" className="menus">
                <Menu.Item style={{}} key={6}>
                  <img style={{ width: '1.5vw' }} alt="none" src={active}></img>
                  团队活动
                </Menu.Item>
              </Link>
              <Link to="/join" className="menus">
                <Menu.Item style={{}} key={7}>
                  <img style={{ width: '1.5vw' }} alt="none" src={join}></img>
                  加入我们
                </Menu.Item>
              </Link>

              <SubMenu
                title={
                  <div>
                    <img
                      style={{ width: '1.5vw' }}
                      alt="none"
                      src={meber}
                    ></img>
                    <span>团队规模</span>
                  </div>
                }
                className="menus"
              >
                <Link to="/scaleteacher">
                  <Menu.Item key="1">指导老师</Menu.Item>
                </Link>
                <Link to="/scalestuden">
                  <Menu.Item key="2">团队学生</Menu.Item>
                </Link>
              </SubMenu>
            </Menu>
          </Header>
          <Content className="content">
            <ViewRouter></ViewRouter>
          </Content>
          <Footer className="footer">
            <div className="footer_div">
              <Row>
                             
                <Col
                  className="col_footer_gif"
                  xs={{ span: 4, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  md={{ span: 4, offset: 0 }}
                  lg={{ span: 4, offset: 1 }}
                  xl={{ span: 3, offset: 1 }}
                >
                  <img className="footer_gif" alt="none" src={gif}></img>  
                </Col>
                <Col
                  className="footer_div_p_name"
                  xs={{ span: 6, offset: 2 }}
                  sm={{ span: 6, offset: 2 }}
                  md={{ span: 6, offset: 2 }}
                  lg={{ span: 6, offset: 2 }}
                  xl={{ span: 6, offset: 3 }}
                >
                  图灵智能创新团队
                  <p className="footer_div_p_litter">
                    TURING广东海洋大学第一个人工智能团队    
                  </p>
                </Col>
                <Col
                  className="footer_div_p_litter"
                  xs={{ span: 8, offset: 0 }}
                  sm={{ span: 9, offset: 0 }}
                  md={{ span: 10, offset: 0 }}
                  lg={{ span: 9, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}
                >
                                           {' '}
                  <img className="footer_app" alt="none" src={app}></img>
                  <Col
                    xs={{ span: 12, offset: 10 }}
                    sm={{ span: 12, offset: 10 }}
                    md={{ span: 11, offset: 9 }}
                    lg={{ span: 11, offset: 9 }}
                    xl={{ span: 10, offset: 9 }}
                  >
                    微信公众号:图灵智能创新团队
                  </Col>
                </Col>
                               
              </Row>
            </div>
          </Footer>
        </Layout>
      </div>
    )
  }
}
