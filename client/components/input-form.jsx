import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form, FormGroup, Button } from 'reactstrap';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            mealtime: '',
            meal: '',
            calories: '',
            note: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidUpdate(props) {
        if (this.props.setEditing.id !== props.setEditing.id) {
            this.setState(this.props.setEditing);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            id: 0,
            mealtime: '',
            meal: '',
            calories: '',
            note: ''
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    mealValidate(e) {
        if(this.state.meal.length >= 1) {
            this.setState({
                [e.target.name]: e.target.value,
                note: ''
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                note: 'Please enter a valid entry'
            });
        }
    }
    render() {
        let regex = /\d+/;
        let addInput;
        if (
            (this.state.calories) &&
            regex.test(this.state.calories) &&
            this.state.meal.length > 1
        ) {
            addInput = <Button color="success" className="mr-1 mt-1 submitButton">
                {this.state.id === 0 ? 'Add' : 'Update'} </Button>
        } else {
            addInput = <Button color="secondary" className="mr-1 mt-1 submitButton" disabled>Please Complete Form</Button>
        }
        let editText;
        if (this.state.id === 0) {
            editText = 'form-control';
        } else {
            editText = 'form-control editInputText';
        }
        return (
            <Form className="col-sm mt-3" onSubmit={this.handleSubmit} onReset={this.props.handleReset}>
                <div>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-utensils" />
                            <Input
                                type="select"
                                className={editText}
                                name='mealtime'
                                value={this.state.mealtime}
                                onChange={e => {
                                    this.handleChange(e)
                                }}
                            >
                                    <option hidden>MealTime</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                    <option>Snack</option>
                            </Input>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-hotdog" />
                            <Input
                                type="text"
                                className={editText}
                                name="meal"
                                placeholder="What did you Eat"
                                value={this.state.meal}
                                onChange={e => {
                                    this.mealValidate(e);
                                }}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-weight" />
                            <Input
                                type="number"
                                className={editText}
                                name="calories"
                                placeholder="Calories"
                                value={this.state.calories}
                                onChange={e => {
                                    this.handleChange(e);
                                }}
                            />
                        </InputGroup>
                        <div>{this.state.note}</div>
                    </FormGroup>
                </div>
                <FormGroup>
                    <div className="text-center">
                        {addInput}
                        <Button
                            className="mt-1 mr-1"
                        color="danger"
                        type="reset"
                        >
                            Cancel
                        </Button>
                    </div>
                </FormGroup>
            </Form>
        )
    }
}
