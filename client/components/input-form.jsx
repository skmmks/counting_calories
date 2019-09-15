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
            calories: ''
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} onReset={this.props.handleReset}>
                <div>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-utensils" />
                            <Input type="select" name='mealtime' onChange={this.handleChange} value={this.state.mealtime}>
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
                            <Input type="text" name="meal" placeholder="What did you Eat" onChange={this.handleChange} value={this.state.meal}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-weight" />
                            <Input type="number" name="calories" placeholder="Calories" onChange={this.handleChange} value={this.state.calories}
                            />
                        </InputGroup>
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
