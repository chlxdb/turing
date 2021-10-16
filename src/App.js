import { Link } from 'react-router-dom'
import ViewRouter from './router/index'
// 封装好的路由

import gif from './logo1.gif'
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
            <Menu
              style={{ marginTop: '30px' }}
              className="nar"
              mode="horizontal"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item
                key={8}
                style={{
                  marginLeft: 'auto',
                  fontSize: '42px',
                  fontFamily: 'cursive',
                }}
                className="turing-title"
              >
                图灵智能创新团队
              </Menu.Item>
              <Link to="/index" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={1}>
                  首页
                </Menu.Item>
              </Link>
              <Link to="/leader" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={3}>
                  领导视察
                </Menu.Item>
              </Link>
              <Link to="/project" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={5}>
                  团队项目
                </Menu.Item>
              </Link>
              <Link to="/honor" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={6}>
                  团队荣誉
                </Menu.Item>
              </Link>
              <Link to="/active" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={6}>
                  团队活动
                </Menu.Item>
              </Link>
              <Link to="/join" className="menus">
                <Menu.Item style={{ fontSize: '22px' }} key={7}>
                  加入我们
                </Menu.Item>
              </Link>
              <SubMenu
                style={{ fontSize: '22px' }}
                title="团队规模"
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
          <Content style={{ backgroundColor: '' }}>
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
              </p>
              <img src={gif}></img>
            </div>
          </Footer>
        </Layout>
      </div>
    )
  }
}
