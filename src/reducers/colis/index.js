import {
    GET_COLIS_RESP,
    POST_COLIS_RESP,
    PUT_COLIS_RESP,
    DELETE_COLIS_RESP
} from "../../actions/actions-types";

const initialState = {
    colis: []
};

const colisReducer = (state = initialState, action) => {
    switch (action.type) {
        // --------------- Colis reducer -----------------
        case GET_COLIS_RESP:
            return {
                ...state,
                colis: action.payload
            };
        case POST_COLIS_RESP:
            return {
                ...state,
                colis: [...state.colis, action.payload]
            };
        case PUT_COLIS_RESP:
            return {
                ...state,
                colis: state.colis.map(colis => {
                    if (colis.id !== action.payload.id) {
                        return colis;
                    } else {
                        return {...action.payload};
                    }
                })
            };
        case DELETE_COLIS_RESP:
            return {
                ...state,
                colis: state.colis.filter(colis => {
                    return action.payload.indexOf(colis.id) < 0;
                })
            };
        default:
            return state;
    }
};
export default colisReducer;
