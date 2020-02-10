import axios from 'axios'
import { SAVE_STUDENT_DATA, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from './ActionTypes'

const API_URL = process.env.REACT_APP_API || 'https://the-flask-test.herokuapp.com/api/v1'

export const fetchStudents = () => {
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

export const saveStudent = (mode, data) => {
    return dispatch => {
        let url = `${API_URL}/student`
        let value = data
        let action = 'post'
        if (mode === 'edit') {
            url = `${url}/${value.id}`
            value = {
                name: data.name,
                age: data.age,
                class: data.class,
                sex: data.sex,
                gpa: data.gpa,
                siblings: data.siblings
            }
            action = 'put'
        }
        return axios[action](url, value)
            .then(function (response) {
                if (mode === 'edit') {
                    dispatch(updateStudent({ id: response.data.id, ...value }))
                } else {
                    dispatch(addStudent({ id: response.data.id, ...value }))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const addStudent = (payload) => {
    return {
        type: ADD_STUDENT,
        payload
    }
}

export const updateStudent = (payload) => {
    return {
        type: UPDATE_STUDENT,
        payload
    }
}

export const deleteStudent = (payload) => {
    return dispatch => {
        return axios.delete(`${API_URL}/student/${payload}`)
            .then(function (response) {
                dispatch(deleteStudentData(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const deleteStudentData = (payload) => {
    return {
        type: DELETE_STUDENT,
        payload
    }
}