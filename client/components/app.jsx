import React from 'react';

import Header from './header';

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
  }
  render() {
    return (
      <Header/>
    );
  }
}
