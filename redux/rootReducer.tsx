import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
    todoStore : todoReducer
})

export default rootReducer;
