import React, { Component } from 'react';
import * as dateFns from 'date-fns';
import styled from "styled-components";
import Select from '../select/Select'

import moon from '../../assets/svg/moon.svg';
import './Calendar.scss';   

const Image = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: -6px;
  right: -8px;
`;

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            leaves: [new Date("05/12/2021")],
            dateSelect: [
                new Date("05/12/2021"),
                new Date("05/13/2021"),
            ],
            select: new Date("05/12/2021")
        };
        
    }

    selectDate=(date) => {
        debugger
        console.log(date);
        this.setState({
            select: date
        })
        
    }

    renderHeader =() => {
        return (
        <>
        <span className="calendar-header-text">Mark Attendance</span>
          <div className="header row flex-middle">
            <div className="col col-start">
              <Select selectedValue={this.state.select} selectChange={this.selectDate} values={this.state.dateSelect}/>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <button className="btn">Mark Leave</button>
            </div>
          </div>
          </>
        );
      }
    renderDays =() => {
        const days = [];
        const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {weeks[i]}
            </div>
          );
        }
        return <div className="days row">{days}</div>;
      }

    renderCells =() => {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                let isAbsent = false;
                this.state.leaves.forEach((leave)=> {
                    if(leave.getDate() === cloneDay.getDate() 
                    && leave.getMonth() === cloneDay.getMonth()
                    && leave.getFullYear() === cloneDay.getFullYear()) {
                        isAbsent = true;
                    }

                })
                days.push(
                <div
                    className={`col cell ${
                    !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={() => this.onDateClick(dateFns.parse(`${cloneDay.getDate()}.${cloneDay.getMonth() + 1}.${cloneDay.getFullYear()}`, "d.MM.yyyy", new Date()))}
                >
                    <span className={`number ${isAbsent ? "date-border" : ''}`}>{formattedDate}
                        {isAbsent ?(<Image src={moon}/>) : ''}
                    </span>
                </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
          });
    }
    nextMonth = () => {
        this.setState({
          currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
      };
      
    prevMonth = () => {
        this.setState({
          currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
      };

    render() {
        return (
            <div className="calender-container">
               {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        )
    }
}

export default Calendar;