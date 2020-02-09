import { combineReducers } from 'redux';
import modal from './modal'
import student from './student'


export default () => combineReducers({
    modal,
    student
});