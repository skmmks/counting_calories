import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form, FormGroup, Button } from 'reactstrap';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealtime: '',
            meal: '',
            calories: '',
        };
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <Form>
                <div>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-utensils" />
                            <Input
                                type="text"
                                placeholder="MealTime"
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-hotdog" />
                            <Input
                                type="text"
                                placeholder="What did you Eat"
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" className="input-group-text fas fa-weight" />
                            <Input
                                type="text"
                                placeholder="Calories"
                            />
                        </InputGroup>
                    </FormGroup>
                </div>
            </Form>
        )
    }
}
