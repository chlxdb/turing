import { NavLink } from "react-router-dom";
import ViewRouter from "./router/index";
// 封装好的路由
import "./App.css";

import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>

          <Menu
            style={{ marginTop: "20px" }}
            className="nar"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <NavLink to="/index">
              {" "}
              <Menu.Item key={1}>首页123</Menu.Item>
            </NavLink>
            <NavLink to="/leader">
              {" "}
              <Menu.Item key={2}>领导视察</Menu.Item>
            </NavLink>
            <NavLink to="/index">
              {" "}
              <Menu.Item key={3}>团队规模</Menu.Item>
            </NavLink>
            <NavLink to="/index">
              {" "}
              <Menu.Item key={4}>团队项目</Menu.Item>
            </NavLink>
            <NavLink to="/index">
              {" "}
              <Menu.Item key={5}>团队荣誉</Menu.Item>
            </NavLink>
            <NavLink to="/index">
              {" "}
              <Menu.Item key={6}>加入我们</Menu.Item>
            </NavLink>

          </Menu>
        </Header>
        <Content>
          Content:
          <ViewRouter />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
export default App;
