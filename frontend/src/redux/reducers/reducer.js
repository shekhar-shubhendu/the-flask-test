import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import modal from './modal'
import student from './student'


export default () => combineReducers({
    modal,
    student,
    form: formReducer
})