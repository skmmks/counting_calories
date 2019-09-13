import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.input.mealtime}</td>
                <td>{this.props.input.meal}</td>
                <td>{this.props.input.calories}</td>
                <td>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={e => {
                        e.preventDefault();
                        this.props.deleteInput(console.log('test'));
                    }}>
                    </button>
                </td>
            </tr>
        )
    }
}
