import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import FormInput from '../FormInput'
import FormSelect from '../FormSelect'

class StudentModal extends Component {
    handleClose = () => {
        this.props.toggleModal()
    }
    handleFormSubmit = (data) => {
        this.props.handleCreate(this.props.mode, data)
    }
    required = value => {
        if (value === undefined || value === null || value < 0)
            return 'Required';
        return undefined;
    }
    number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
    isValidName = str => str && /\d/.test(str) ? 'Invalid Name' : undefined
    render() {
        const { mode, show, handleSubmit, pristine, submitting } = this.props
        return (
            <Modal show={show} onHide={this.handleClose}>

                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title className="app-modal-title">{mode} Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId='Name'>
                            <Form.Label>
                                Name
                                </Form.Label>
                            <Field
                                name="name"
                                component={FormInput}
                                type="text"
                                placeholder="Name"
                                validate={[this.required, this.isValidName]}
                            />
                        </Form.Group>
                        <Form.Group controlId='Age'>
                            <Form.Label>
                                Age
                                </Form.Label>
                            <Field
                                name="age"
                                component={FormInput}
                                type="number"
                                placeholder="Age"
                                validate={[this.required, this.number]}
                            />
                        </Form.Group>
                        <Form.Group controlId='Class'>
                            <Form.Label>
                                Class
                                </Form.Label>
                            <Field
                                name="class"
                                component={FormInput}
                                type="number"
                                placeholder="Class"
                                validate={[this.required, this.number]}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sex</Form.Label>
                            <Field
                                name='sex'
                                component={FormSelect}
                                type='select'
                                id='sex'
                                validate={[this.required]}
                            />
                        </Form.Group>
                        <Form.Group controlId='GPA'>
                            <Form.Label>
                                GPA
                                </Form.Label>
                            <Field
                                name="gpa"
                                component={FormInput}
                                type="number"
                                placeholder="GPA"
                                validate={[this.required, this.number]}
                            />
                        </Form.Group>
                        <Form.Group controlId='Siblings'>
                            <Form.Label>
                                Siblings
                                </Form.Label>
                            <Field
                                name="siblings"
                                component={FormInput}
                                type="number"
                                placeholder="Siblings"
                                validate={[this.required, this.number]}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                        <Button variant="primary" disabled={pristine || submitting} type="submit">
                            <FontAwesomeIcon icon={faSave} />
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

StudentModal = reduxForm({
    form: 'StudentModal',
    enableReinitialize: true
})(StudentModal)

StudentModal = connect(
    (state) => {
        return {
            initialValues: state.modal.data
        }
    },
    null
)(StudentModal)

export default StudentModal