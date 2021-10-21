import { Link } from 'react-router-dom'
import ViewRouter from './router/index'
// 封装好的路由

import jpg from './logo.jpg'
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
                  marginLeft: 'auto',
                  marginRight: '30px',
                  fontSize: '20px',
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
                  首页
                </Menu.Item>
              </Link>
              <Link to="/leader" className="menus">
                <Menu.Item style={{}} key={3}>
                  领导视察
                </Menu.Item>
              </Link>
              <Link to="/project" className="menus">
                <Menu.Item style={{}} key={5}>
                  团队项目
                </Menu.Item>
              </Link>
              <Link to="/honor" className="menus">
                <Menu.Item style={{}} key={6}>
                  团队荣誉
                </Menu.Item>
              </Link>
              <Link to="/active" className="menus">
                <Menu.Item style={{}} key={6}>
                  团队活动
                </Menu.Item>
              </Link>
              <Link to="/join" className="menus">
                <Menu.Item style={{}} key={7}>
                  加入我们
                </Menu.Item>
              </Link>
              <SubMenu style={{}} title="团队规模" className="menus">
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
          <Footer
            style={{
              height: '200px',
              backgroundColor: 'black',
              opacity: '0.8',
            }}
          >
            <div style={{ color: 'white', textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '28px',
                  margin: '1.2em 0 0.1em',
                }}
              >
                图灵智能创新团队
              </p>
              <p style={{ fontSize: '12px' }}>
                TURING©广东海洋大学第一个人工智能团队
                {/* <img style={{ width: '100%' }} src={gif}></img> */}
              </p>
            </div>
          </Footer>
        </Layout>
      </div>
    )
  }
}
