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
                </Table>
            </Col>
        )
    }
}
