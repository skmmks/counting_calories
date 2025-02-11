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
          <div className='formButton'>
            <i
              className='far fa-edit editButton mr-3'
              onClick={e => {
                this.props.setEditing({
                  id: this.props.input.id,
                  mealtime: this.props.input.mealtime,
                  meal: this.props.input.meal,
                  calories: this.props.input.calories
                });
              }}
            />
            <i className='far fa-trash-alt deleteButton' onClick={this.toggle} />
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalBody className='text-center'>
                Are you sure you want to delete "{this.props.input.mealtime} - {this.props.input.meal}"
              </ModalBody>
              <ModalFooter className='mx-auto'>
                <Button
                  color='danger'
                  onClick={event => {
                    this.props.deleteInput(this.props.input.id);
                  }}
                >
                  Delete
                </Button>
                <Button color='secondary' onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </td>
      </tr>
    );
  }
}
