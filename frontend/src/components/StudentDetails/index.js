import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table, Button } from 'react-bootstrap'

class StudentDetails extends Component {
    constructor(props) {
        super(props)
        this.props.getAllStudents()
    }
    updateDetails = (id) => {
        const student = this.props.students.find(o => o.id === id)
        this.props.updateModal(student)
        this.props.toggleModal('edit')
    }
    delete = (id) => {
        this.props.deleteStudent(id)
    }
    openCreateModal = () => {
        this.props.updateModal({})
        this.props.toggleModal('add')
    }
    render() {
        return (
            <>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Class</th>
                            <th>Gender</th>
                            <th>Sibling</th>
                            <th>GPA</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.class}</td>
                                        <td>{item.sex}</td>
                                        <td>{item.siblings}</td>
                                        <td>{item.gpa}</td>
                                        <td>
                                            <Button variant="primary" className="action-buttons" onClick={() => this.updateDetails(item.id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button variant="danger" onClick={() => this.delete(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </Table>
                <Button variant="primary" className="add-student" onClick={() => { this.openCreateModal() }}>
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </Button>
            </>
        )
    }
}

export default StudentDetails
