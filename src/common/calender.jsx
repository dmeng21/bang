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
      currentDate: new Date()
    };
  }
  componentDidMount() {
      this.setCurrentMonth(this.state.currentDate);
  }
  setCurrentMonth = (date) =>{
      var month = date.getMonth();
      var year = date.getFullYear();
      this.setState({
          month: month,
          year: year
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
      <div>
        <table className="table">
          <thead>
            <tr>
              {weekDay.map((week, key) => {
                return <td>{week}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {LINES.map((week, key) => {
              return (
                <tr>
                  {weekDay.map((week, index) => {
                    return <td style={{color: this.checkCurrentDay(key, index, monthDays, weekday)?"red":"#000"}}>
                        {this.getDateText(key, index, monthDays, weekday)}
                    </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
