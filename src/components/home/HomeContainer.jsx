import React, { Component } from "react";
import { Carousel } from "antd";
import Calender from "../../common/calender";

import "../../css/Home.scss";

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="mainBox">
        <Carousel autoplay>
          <div>
            <h3>棒棒糖1</h3>
          </div>
          <div>
            <h3>棒棒糖2</h3>
          </div>
          <div>
            <h3>棒棒糖3</h3>
          </div>
        </Carousel>
        <div className="bottomContent">
          <div className="leftContent"></div>
          <div className="exerciseContent">
            <div className="title">实/战/演/练</div>
            <div className="content">
              <div className="contentImage"></div>
              <div className="project">
                <h2>VUE后台管理项目</h2>
                <ul>
                  <li>技术栈：XX</li>
                  <li>代练价格：10元/练一次</li>
                  <li>代练时间：晚上10点开始练完为止</li>
                </ul>
                <button>
                  查看详情
                </button>
              </div>
            </div>
            <div className="content2"></div>
            <div className="more">...查看更多</div>
          </div>
          <div className="rightContent">
            <div className="calender">
              <div className="title">
                <h3>棒棒团学习日程表</h3>
              </div>
              <div className="time">
                <Calender />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
