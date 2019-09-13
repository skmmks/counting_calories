import React from 'react';
import { Row, Container } from 'reactstrap';
import Header from './header';
import InputTable from './input-table';
import InputForm from './input-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: [],
      editing: null
    };
    this.setEditing = this.setEditing.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
    this.addUserInput = this.addUserInput.bind(this);
    this.deleteUserInput = this.deleteUserInput.bind(this);
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
  addUserInput(userInput) {
    const newInput = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userInput)
    };
    fetch('/api/userInput', newInput)
        .then(res => res.json())
        .then(res => {
          this.setState({
            userInput: this.state.userInput.concat(res)
          });
        })
        .catch(error => console.error('error: ', error));
  }
  deleteUserInput(id) {
    const delUserInput = {
      method: 'DELETE'
    };
    fetch(`/api/userInput/${id}`, delUserInput)
        .then(() => {
          const input = this.state.userInput.filter(input =>
            input.id !== id);
            this.setState({ input });
        });
  }
  setEditing(userInput) {
    this.setState({
      editing: userInput
    });
  }
  getAverage() {
    if(!this.state.userInput.length) return 'N/A';
    const totalInputs = this.state.userInput.reduce((total, calories) => {
      return total + calories.calories;
    }, 0);
    const averageInput = totalInputs / this.state.userInput.length;
    return averageInput.toFixed(2);
  }
  render() {
    let average = this.getAverage();
    return (
        <div className="formWrapper">
          <Container fluid>
            <Header average={average}/>
          </Container>
          <Container>
            <Row>
              <InputTable
              inputs={this.state.userInput}
              />
              <InputForm
                  onSubmit={this.addUserInput}
              />
            </Row>
          </Container>
        </div>

    );
  }
}
