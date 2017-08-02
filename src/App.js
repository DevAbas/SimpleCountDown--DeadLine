import React, { Component } from 'react';
import Clock from './Clock';
import {
  DefaultStyle,
  Wrapper,
  Title,
  Input,
  Button
} from './style/mainStyle';

class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      deadline: "December 30, 2017",
      newDeadLine: ""
    }
  }

  changeDeadLine(e){
    this.setState({
      deadline: this.state.newDeadLine
    })
  }

  render(){
    return (
      <Wrapper>
          <Title>
           CountDown to {this.state.deadline}
          </Title>
          <Clock
            deadline={this.state.deadline}
          />
          <div>
            <Input type="text"
             placeholder="New Date"
             onChange = {event => this.setState({newDeadLine: event.target.value})}
            ></Input>
            <Button onClick={() => this.changeDeadLine()}>Submit</Button>
          </div>
      </Wrapper>
    )
  }
}

export default App;
