
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionType";
import { saveToLocalStorage, getStorage } from './localStorage';

const initialState = {
    todo: getStorage()
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state.todo = [...state.todo, { title: action.payload.title, num: action.payload.num }]
            saveToLocalStorage(state.todo);
            return {
                ...state,
                todo: state.todo
            }
        case REMOVE_TODO:
            state.todo = state.todo.filter((_, index) => index !== action.payload);
            saveToLocalStorage(state.todo)
            return {
                ...state,
                todo: state.todo
            }
        default:
            return state;
    }
}

export default todoReducer
