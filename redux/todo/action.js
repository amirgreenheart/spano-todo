import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionType";

export const addTodo = (title, num) => {
    return {
        type: ADD_TODO,
        payload: { title, num }
    }
}

export const editTodo = (todoId) => {
    return {
        type: EDIT_TODO,
        payload: todoId
    }
}

export const removeTodo = (todoIdndex) => {
    return {
        type: REMOVE_TODO,
        payload: todoIdndex
    }
}