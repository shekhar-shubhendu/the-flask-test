import { SAVE_STUDENT_DATA } from './ActionTypes'

const API_URL = process.env.REACT_APP_API || 'https://the-flask-test.herokuapp.com/api/v1'

export const fetchStudents = () => {
    console.log("fdsfsdf", API_URL)
    return dispatch => {
        return fetch(`${API_URL}/students`)
        .then(response => response.json())
        .then(data => dispatch(saveStudentsData(data)))
    }
}

export const saveStudentsData = (payload) => {
    return {
        type: SAVE_STUDENT_DATA,
        payload
    }
}