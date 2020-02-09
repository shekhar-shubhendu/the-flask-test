import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table, Button } from 'react-bootstrap';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.props.getAllStudents()
    }
    updateDetails = (id) => {
        //info.heading = 'EDIT'
        console.log(id)
        //this.props.updateModal(info)
        this.props.toggleModal()
    };
    delete = (id) => {
        console.log("delete", id);
    };
    render() {
        const studentExample = [
            {
                id: 1,
                name: "Shubhendu",
                age: "27",
                sex: "Male",
                sibling: 1,
                gpa: "10"

            }
        ]
        return (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
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
                                        <td>{item.sex}</td>
                                        <td>{item.siblings}</td>
                                        <td>{item.gpa}</td>
                                        <td><Button variant="primary" onClick={() => this.updateDetails(item.id)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        </td>
                                        <td><Button variant="danger" onClick={() => this.delete(item.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </Table>
                <Button variant="primary" className="add-student">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </>
        );
    }
}

export default StudentDetails;
