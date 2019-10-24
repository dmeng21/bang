import React, { Component } from "react";
import "../css/calender.scss"

const weekDay = ["日", "一", "二", "三", "四", "五", "六"];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const LINES = [1, 2, 3, 4, 5, 6];

export default class Calender extends Component {
  constructor(props) {
    super();

    this.state = {
      month: 0,
      year: 0,
      day:0,
      currentDate: new Date()
    };
  }
  componentDidMount() {
      this.setCurrentMonth(this.state.currentDate);
  }
  setCurrentMonth = (date) =>{
      var month = date.getMonth();
      var year = date.getFullYear();
      var day = date.getDate();
      this.setState({
          month: month,
          year: year,
          day: day
      })
  }
  GetMonthDays = (month) => {
      return MONTH_DAYS[month];
  };
  GetFirstDay = () =>{
      var fullyear = this.state.year;
      var month = this.state.month;
      return this.GetMonthFirstDay(fullyear, month);
  }
  GetMonthFirstDay = (year, month) =>{
      var date = new Date();
      date.setFullYear(year);
      date.setMonth(month);
      date.setDate(1);
      return date.getDay()
  }
  getDateText(line, weekIndex, monthdays, weekDay){
      var number = line * 7 + weekIndex + 1 - weekDay;
      if(number <=0 || number > monthdays){
          return <span>&nbsp;</span>
      }
      return number
  }
  checkCurrentDay(line, weekIndex, monthdays, weekDay){
      var number = line * 7 + weekIndex + 1 - weekDay;
      if (number === this.state.currentDate.getDate()){
          return true
      }
      else
        return false
  }
  render() {
      var weekday = this.GetFirstDay();
      var monthDays = this.GetMonthDays(this.state.month);
    return (
      <div className="mainCalenderBox">
        <div className="currentDay">
          <div className="span"></div>
          <div className="date">{this.state.month+1}月{this.state.day }日<span>{this.state.year}</span></div>
          
        </div>
        <table className="table">
          <thead>
            <tr>
              {weekDay.map((week, key) => {
                return <td key={key}>{week}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {LINES.map((week, key) => {
              return (
                <tr key={key}>
                  {weekDay.map((week, index) => {
                    return <td key={index} style={{color: this.checkCurrentDay(key, index, monthDays, weekday)?"red":"#000"}}>
                        {this.getDateText(key, index, monthDays, weekday)}
                    </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="arrange">
          <div className="span"></div>
          <div className="currentArrange">今日安排</div>
          <ul>
            <li style={{backgroundColor:"#f2a55e", color:"#fff"}}>网易云音乐</li>
            <li>python学习团</li>
            <li>产品经理学习团</li>
          </ul>
          <div className="ercode"></div>
        </div>
      </div>
    );
  }
}
