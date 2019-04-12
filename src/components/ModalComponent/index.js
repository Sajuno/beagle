import React from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

export default class ModalComponent extends React.Component {
    state = {
        show: true,
      };
    
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }

  render() {
    return (
        <Modal show={this.state.show}>
            <ModalHeader>Header</ModalHeader>
            <ModalBody>Body</ModalBody>
            <ModalFooter>
                <Button onClick={this.handleClose}>Close</Button>
            </ModalFooter>
        </Modal>
       
    );
  }
}