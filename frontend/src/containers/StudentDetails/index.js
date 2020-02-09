import { connect } from 'react-redux';
import { toggleModal, updateModal } from '../../redux/actions/ModalActions'
import { fetchStudents } from '../../redux/actions/APIActions'
import StudentDetails from '../../components/StudentDetails';

export default connect(
  (state) => {
    return { students: state.student.data };
  },
  dispatch => ({
    toggleModal: () => {
      dispatch(toggleModal())
  },
  updateModal: (payload) => {
      dispatch(updateModal(payload))
  },
  getAllStudents: () => {
    dispatch(fetchStudents())
  }
  })
)(StudentDetails)