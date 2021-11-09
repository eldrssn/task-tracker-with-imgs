import {TypedUseSelectorHook, useSelector} from "react-redux";
import { RootReducer } from "../store/reducer/index";



export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;