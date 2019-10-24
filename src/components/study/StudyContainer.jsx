import React, { Component } from "react";
import { Icon } from "antd";
import "../../css/study.scss";

export default class StudyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
  }
  render() {
    return (
      <div className="studyMinbox">
        <div className="bgImage"></div>
        <div className="Clockin">
          <div className="inputBox"></div>
          <button>打卡</button>
        </div>
        <div className="ClockInList">
          <div className="list">
            <div
              style={{
                width: "60px",
                paddingTop: "15px",
                paddingLeft: "25px",
                float: "left"
              }}
            >
              <div className="image"></div>
            </div>
            <div className="content">
              <ul>
                <li style={{ fontSize: "14px" }}>橘子成熟</li>
                <li style={{ fontSize: "10px" }}>
                  2019-10-24 15: 32{" "}
                  <Icon
                    type="read"
                    style={{ color: "#f2a55e", marginLeft: "5px" }}
                  />
                  <h5>坚持65天</h5>
                </li>
                <li>
                  <span>
                    SAML在单点登录中大有用处：在SAML协议中，一旦用户身份被主网站（身份鉴别服务器，Identity
                    Provider，IDP）认证过后，
                    该用户再去访问其他在主站注册过的应用（服务提供者，Service
                    Providers，SP）时，都可以直接登录，而不用再输入身份和口令。
                  </span>
                </li>
                <li style={{ fontSize: "10px" }}>
                  <Icon type="message" />
                  1111 <Icon type="smile" style={{ marginLeft: "20px" }} />
                  111
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            <div
              style={{
                width: "60px",
                paddingTop: "15px",
                paddingLeft: "25px",
                float: "left"
              }}
            >
              <div className="image"></div>
            </div>
            <div className="content">
              <ul>
                <li style={{ fontSize: "14px" }}>橘子成熟</li>
                <li style={{ fontSize: "10px" }}>
                  2019-10-24 15: 32{" "}
                  <Icon
                    type="read"
                    style={{ color: "#f2a55e", marginLeft: "5px" }}
                  />
                  <h5>坚持65天</h5>
                </li>
                <li>
                  <span>
                    SAML在单点登录中大有用处：在SAML协议中，一旦用户身份被主网站（身份鉴别服务器，Identity
                    Provider，IDP）认证过后，
                    该用户再去访问其他在主站注册过的应用（服务提供者，Service
                    Providers，SP）时，都可以直接登录，而不用再输入身份和口令。
                  </span>
                </li>
                <li style={{ fontSize: "10px" }}>
                  <Icon type="message" />
                  1111 <Icon type="smile" style={{ marginLeft: "20px" }} />
                  111
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            <div
              style={{
                width: "60px",
                paddingTop: "15px",
                paddingLeft: "25px",
                float: "left"
              }}
            >
              <div className="image"></div>
            </div>
            <div className="content">
              <ul>
                <li style={{ fontSize: "14px" }}>橘子成熟</li>
                <li style={{ fontSize: "10px" }}>
                  2019-10-24 15: 32{" "}
                  <Icon
                    type="read"
                    style={{ color: "#f2a55e", marginLeft: "5px" }}
                  />
                  <h5>坚持65天</h5>
                </li>
                <li>
                  <span>
                    SAML在单点登录中大有用处：在SAML协议中，一旦用户身份被主网站（身份鉴别服务器，Identity
                    Provider，IDP）认证过后，
                    该用户再去访问其他在主站注册过的应用（服务提供者，Service
                    Providers，SP）时，都可以直接登录，而不用再输入身份和口令。
                  </span>
                </li>
                <li style={{ fontSize: "10px" }}>
                  <Icon type="message" />
                  1111 <Icon type="smile" style={{ marginLeft: "20px" }} />
                  111
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
