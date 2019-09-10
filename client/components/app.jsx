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
    if(!this.state.userInput.length) return 'N/A';
    const totalInputs = this.state.userInput.reduce((total, calories) => {
      return total + calories.calories;
    }, 0);
    const averageInput = totalInputs / this.state.userInput.length;
    return Math.ceil(averageInput);
  }
  render() {
    let average = this.getAverage();
    return (
      <Header average={average}/>
    );
  }
}
