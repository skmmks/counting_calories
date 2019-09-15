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
    // mealTimeValidate(e) {
    //     if(this.state.mealtime === "---") {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //             note: 'Please enter a valid mealtime'
    //         });
    //     }
    //     else {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //             note: ''
    //         });
    //     }
    // }
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
    // calorieValidate(e) {
    //     if(this.state.calorie >= 0) {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //             note: ''
    //         });
    //     } else {
    //         this.setState({
    //             [e.target.name]: e.target.value,
    //             note: 'Please enter a number'
    //         });
    //     }
    // }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} onReset={this.props.handleReset}>
                <div>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-utensils" />
                            <Input
                                type="select"
                                name='mealtime'
                                value={this.state.mealtime}
                                onChange={e => {
                                    this.handleChange(e)
                                }}
                            >
                                    <option>---</option>
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
                    <div>
                        <Button
                        color="success"
                        >
                            Add
                        </Button>
                        <Button
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
