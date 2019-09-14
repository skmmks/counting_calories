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
        let input = this.props.userInput.map(input => {
            return (
                <UserInput
                    input={input}
                    key={input.id}
                    deleteInput={this.props.deleteInput}
                    setEditing={this.props.setEditing}
                    />
            )
        });
        // let inputs = this.props.inputs.map(inputs => {
        //     return (
        //         <UserInput
        //             input={inputs}
        //             key={inputs.id}
        //             deleteInput={this.props.deleteInput}
        //             setEditing={this.props.setEditing}
        //         />
        //     );
        // });
        return(
            <Col sm="8">
                <Table hover striped bordered>
                    <thead>
                        <tr>
                            <th scope="col">Meal Time</th>
                            <th scope="col">Meal (What You Ate)</th>
                            <th scope="col">Calories</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{input}</tbody>
                </Table>
            </Col>
        )
    }
}
