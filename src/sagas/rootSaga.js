import { takeLatest, all } from "redux-saga/effects";
import {
    handleGetColis,
    handlePostColis,
    handlePutColis,
    handleDeleteColis,
} from "./handlers/colis";
import {DELETE_COLIS_REQ, GET_COLIS_REQ, POST_COLIS_REQ, PUT_COLIS_REQ} from "../actions/actions-types";


function* watchGetColis() {
    yield takeLatest(GET_COLIS_REQ, handleGetColis);
}
function* watchPostColis() {
    yield takeLatest(POST_COLIS_REQ, handlePostColis);
}
function* watchPutColis() {
    yield takeLatest(PUT_COLIS_REQ, handlePutColis);
}
function* watchDeleteColis() {
    yield takeLatest(DELETE_COLIS_REQ, handleDeleteColis);
}

export default function* rootSaga() {
    yield all([
        watchGetColis(),
        watchPostColis(),
        watchPutColis(),
        watchDeleteColis()
    ]);
}
