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
                    <div>
                        <i
                            className="far fa-edit editButton"
                            onClick={e => {
                                this.props.setEditing({
                                    id: this.props.userInput.id,
                                    mealtime: this.props.userInput.mealtime,
                                    meal: this.props.userInput.meal,
                                    calories: this.props.userInput.calories
                                })
                            }}
                        />
                        <i
                            className="far fa-trash-alt deleteButton"
                        />
                    </div>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={event => {
                        this.props.deleteInput(this.props.input.id);
                    }}
                    >
                    </button>
                </td>
            </tr>
        )
    }
}
