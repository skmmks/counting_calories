import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(previousState => ({
            modal: !previousState.modal
        }));
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
                                    id: this.props.input.id,
                                    mealtime: this.props.input.mealtime,
                                    meal: this.props.input.meal,
                                    calories: this.props.input.calories
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
