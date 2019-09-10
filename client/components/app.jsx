import React from 'react';

import Header from './header';
import InputTable from './inputtable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: []
    };
    this.getUserInput = this.getUserInput.bind(this);
  }
  componentDidMount() {
    this.getUserInput();
  }
  getUserInput() {
    fetch('/api/userInput', {
      method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            userInput: res
          });
        })
        .catch(error => console.error('error: ', error));
  }
  getAverage() {
    let inputState = this.state.userInput;
    let totalInputs = 0;
    for (input of inputState) {
      totalInputs += parseInt(input.calories);
    }
    let average = totalInputs / inputState.length;
    let total = average.toFixed(2);
    if (isNaN(total)) {
      return 'N/A';
    }
    return total;
  }
  render() {
    let average = this.getAverage();
    return (
      <Header average={average}/>
    );
  }
}
