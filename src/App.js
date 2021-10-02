import { Link } from 'react-router-dom'
import ViewRouter from './router/index'
// 封装好的路由
import './App.css'

import { Layout, Menu } from 'antd'
// import leader from './pages/Leader'
// import RouterView from './router/router-view'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Menu
            style={{ marginTop: '20px' }}
            className="nar"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Link to="/index">
              <Menu.Item key={1}>首页</Menu.Item>
            </Link>
            <Link to="/leader">
              <Menu.Item key={2}>领导视察</Menu.Item>
            </Link>
            <Link to="/scale">
              <Menu.Item key={3}>团队规模</Menu.Item>
            </Link>
            <Link to="/project">
              <Menu.Item key={4}>团队项目</Menu.Item>
            </Link>
            <Link to="/honor">
              <Menu.Item key={5}>团队荣誉</Menu.Item>
            </Link>
            <Link to="/join">
              <Menu.Item key={6}>加入我们</Menu.Item>
            </Link>
          </Menu>
        </Header>
        <Content>
          <ViewRouter></ViewRouter>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}
export default App
