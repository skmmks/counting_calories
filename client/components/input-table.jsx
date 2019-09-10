import React from 'react';
import UserInput from './user-input';
import { Table, Col } from 'reactstrap';

export default class InputTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    render() {
        let inputs = this.props.inputs.map(inputs => {
            return (
                <UserInput
                    input={inputs}
                    key={inputs.id}
                />
            );
        });
        return(
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Meal Time</th>
                            <th>Meal (What You Ate)</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>{inputs}</tbody>
                </Table>
            </Col>
        )
    }
}
