import {
    DELETE_COLIS_REQ, DELETE_COLIS_RESP,
    GET_COLIS_REQ,
    GET_COLIS_RESP,
    POST_COLIS_REQ,
    POST_COLIS_RESP,
    PUT_COLIS_REQ,
    PUT_COLIS_RESP
} from "./actions-types";

export const getColis = () => ({
    type: GET_COLIS_REQ
});
export const getColisResp = (colis) => ({
    type: GET_COLIS_RESP,
    payload: colis
});

export const postColis = colis => ({
    type: POST_COLIS_REQ,
    payload: colis
});
export const postColisResp = colis => ({
    type: POST_COLIS_RESP,
    payload: colis
});

export const putColis = colis => ({
    type: PUT_COLIS_REQ,
    payload: colis
});
export const putColisResp = colis => ({
    type: PUT_COLIS_RESP,
    payload: colis
});

export const deleteColis = colisIds => ({
    type: DELETE_COLIS_REQ,
    payload: colisIds
});
export const deleteColisResp = colisIds => ({
    type: DELETE_COLIS_RESP,
    payload: colisIds
});
// ----------------------------------------------
