import { combineReducers } from "redux";
import { tracker } from "./tracker/trackerReducer";

const rootReducer = combineReducers({
    tracker,
})

export default rootReducer;