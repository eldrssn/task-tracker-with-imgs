import {combineReducers} from "redux";
import trackerReducer from "./trackerReducer";

export const rootReducer = combineReducers({
    tracker: trackerReducer
})

export type RootReducer = ReturnType<typeof rootReducer>;