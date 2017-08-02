import React, { Component } from 'react';
import { DateWrap, DateItem } from './style/mainStyle';

class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount(){
    this.getUntilTime(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getUntilTime(this.props.deadline), 1000)
  }

  loading0(num){
    return num < 10 ? '0' + num : num;
  }

  getUntilTime(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date ());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days,hours,minutes,seconds})
  }

  render(){
    return (
      <DateWrap>
        <DateItem>{this.loading0(this.state.days)} days</DateItem>
        <DateItem>{this.loading0(this.state.hours)} hours</DateItem>
        <DateItem>{this.loading0(this.state.minutes)} minutes</DateItem>
        <DateItem>{this.loading0(this.state.seconds)} seconds</DateItem>
      </DateWrap>
    )
  }
}

export default Clock;
