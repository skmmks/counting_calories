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
                            <InputGroupAddon addonType="prepend" className="input-group-text" />
                            <Input type="text"/>
                        </InputGroup>
                    </FormGroup>
                </div>
            </Form>
        )
    }
}
