import React, { Component } from "react";
import { Carousel } from 'antd';
import Calender from "../../common/calender"

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
          <div className="exerciseContent">中间部分</div>
          <div className="rightContent">
            <div className="calender">
              <div className="title"><h3>棒棒团学习日程表</h3></div>
              <div className="time"><Calender/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
