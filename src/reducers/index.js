import { combineReducers } from "redux";
import colisReducer from "./colis";

const rootReducer = combineReducers({
    colis: colisReducer,
});

export default rootReducer;
