import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons'
import {  Button, Modal, Form } from 'react-bootstrap';


class StudentModal extends Component {
    constructor(props) {
        super(props);
    }
    saveDetails = (info) => {
        this.handleClose()
        console.log("save ", info);
    }
    updateDetails = (info) => {
        this.handleClose()
        console.log("Edit ", info);
    };
    handleClose = () => {
        this.props.toggleModal()
    };
    render() {
        console.log(this.props)
        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.props.heading }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="Age" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Gender</Form.Label>
                                <Form.Check
                                    type="radio"
                                    id={`Male`}
                                    label={`Male`}
                                    value='male'
                                />
                                <Form.Check
                                    type="radio"
                                    id={`Female`}
                                    label={`Female`}
                                    value='female'
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>GPA</Form.Label>
                                <Form.Control type="text" placeholder="GPA" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Siblings</Form.Label>
                                <Form.Control type="text" placeholder="Age" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            <FontAwesomeIcon icon={faSave}/>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default StudentModal;
