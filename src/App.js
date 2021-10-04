import { Link } from 'react-router-dom'
import ViewRouter from './router/index'
// 封装好的路由
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
              style={{ marginTop: '30px', fontSize: 'large' }}
              className="nar"
              mode="horizontal"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item
                key={8}
                style={{ marginLeft: 'auto', fontSize: '32px' }}
              >
                图灵智能创新团队
              </Menu.Item>
              <Link to="/index" className="menus">
                <Menu.Item key={1}>首页</Menu.Item>
              </Link>
              <Link to="/index">
                <Menu.Item key={2}>团队简介</Menu.Item>
              </Link>
              <Link to="/leader">
                <Menu.Item key={3}>领导视察</Menu.Item>
              </Link>

              <Link to="/project">
                <Menu.Item key={5}>团队项目</Menu.Item>
              </Link>
              <Link to="/honor">
                <Menu.Item key={6}>团队荣誉</Menu.Item>
              </Link>

              <Link to="/join">
                <Menu.Item key={7}>加入我们</Menu.Item>
              </Link>

              <SubMenu title="团队规模">
                <Link to="/scaleteacher">
                  <Menu.Item key="1">指导老师</Menu.Item>
                </Link>
                <Link to="/scalestuden">
                  <Menu.Item key="2">团队学生</Menu.Item>
                </Link>
              </SubMenu>
            </Menu>
          </Header>
          <Content>
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
                  marginBottom: '0.1em',
                }}
              >
                图灵智能创新团队
              </p>
              <p style={{ fontSize: '12px' }}>
                TURING©广东海洋大学第一个人工智能团队
              </p>
            </div>
          </Footer>
        </Layout>
      </div>
    )
  }
}
