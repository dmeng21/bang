import React, { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div className="userLogin">
        <button className="userInfo"></button>
        <button
          style={{
            border: "none",
            backgroundColor: "#fff",
            cursor: "pointer",
            height: "30px",
            lineHeight: "30px"
          }}
        >
          ∨
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "#fff",
            cursor: "pointer",
            height: "30px",
            lineHeight: "30px"
          }}
        >
          [退出]
        </button>
      </div>
    );
  }
}
