import { SAVE_STUDENT_DATA, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../actions/ActionTypes'

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_STUDENT_DATA:
            return Object.assign({}, state, { data: action.payload })
        case UPDATE_STUDENT:
            const arr = [...state.data]
            const index = arr.findIndex(o => o.id === action.payload.id)
            if (index >= 0) {
                arr[index] = action.payload
            }
            return {
                data: arr
            }
        case ADD_STUDENT:
            return {
                data: [...state.data, action.payload]
            }
        case DELETE_STUDENT:
            let val = [...state.data]
            const val_index = val.findIndex(o => o.id === action.payload.id)
            if (val_index) {
                val.splice(val_index, 1)
            }
            return {
                data: val
            }
        default:
            return state //return default state
    }
}

export default reducer