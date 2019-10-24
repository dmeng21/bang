import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import HomeContainer from "./components/home/HomeContainer";
import StudyContainer from "./components/study/StudyContainer";
import UserInfo from "./common/userInfo.jsx"

import "./App.scss";

import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

export default class App extends Component {

  render (){
    console.log(window.location.hash.split('/')[1])
    return <HashRouter>
      <Layout className="layout">
        <Header className="layoutHeader">
          <div className="logo" />
          
          <div style={{}}>
          <UserInfo/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={window.location.hash.split('/').length>1&&window.location.hash.split('/')[1]!==""?[window.location.hash.split('/')[1]]:["/"]}
              style={{ lineHeight: "64px"}}
            >
              <Menu.Item key="/">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="study">
                <Link to="/study">学习日记</Link>
              </Menu.Item>
              <Menu.Item key="3">组队CP</Menu.Item>
              <Menu.Item key="4">打卡记录</Menu.Item>
              <Menu.Item key="5">练习项目</Menu.Item>
              <Menu.Item key="6">就业模块</Menu.Item>
              <Menu.Item key="7">代练模块</Menu.Item>
            </Menu>
            
          </div>
          
        </Header>
        <Content>
          <div style={{ background: "#fff", minHeight: 280 }}>
            <Route path="/" component={HomeContainer} exact></Route>
            <Route path="/study" component={StudyContainer} exact></Route>
          </div>
        </Content>
      </Layout>
    </HashRouter>
  }
}
