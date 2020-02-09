import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table, Button } from 'react-bootstrap';
import StudentModal from '../../containers/StudentModal'

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    updateDetails = (info) => {
        this.props.toggleModal()
        console.log("Edit ", info);
    };
    handleClose = () => {
        this.setState({
            showModal: false
        });
    };
    deactivate = (info) => {
        console.log("deactivate", info);
    };
    render() {
        const studentExample = {
            name: "Shubhendu",
            age: "27",
            sex: "Male",
            sibling: 1,
            gpa: "10"

        }
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
                        <tr>
                            <td>1</td>
                            <td>{studentExample.name}</td>
                            <td>{studentExample.age}</td>
                            <td>{studentExample.sex}</td>
                            <td>{studentExample.sibling}</td>
                            <td>{studentExample.gpa}</td>
                            <td><Button variant="primary" onClick={this.updateDetails}>
                                    <FontAwesomeIcon icon={faEdit}/>
                                </Button>
                            </td>
                            <td><Button variant="danger" onClick={this.deactivate}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="primary" className="add-student">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                <StudentModal showModal={this.state.showModal} />
            </>
        );
    }
}

export default StudentDetails;
