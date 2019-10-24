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
            backgroundColor: "#f2a55e",
            cursor: "pointer",
            height: "30px",
            lineHeight: "30px",
            width:"70px",
            borderRadius:"20px",
            marginLeft:"5px",
            marginRight:"5px",
            color:"#fff"
          }}
        >
          写日记
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
