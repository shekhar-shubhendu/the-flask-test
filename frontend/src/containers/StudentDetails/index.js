import { connect } from 'react-redux';
import { toggleModal, updateModal } from '../../redux/actions/ModalActions'
import { fetchStudents, deleteStudent } from '../../redux/actions/APIActions'
import StudentDetails from '../../components/StudentDetails';

export default connect(
  (state) => {
    return { students: state.student.data };
  },
  dispatch => ({
    toggleModal: (payload) => {
      dispatch(toggleModal(payload))
  },
  updateModal: (payload) => {
      dispatch(updateModal(payload))
  },
  getAllStudents: () => {
    dispatch(fetchStudents())
  },
  deleteStudent: (id) => {
    dispatch(deleteStudent(id))
  }
  })
)(StudentDetails)