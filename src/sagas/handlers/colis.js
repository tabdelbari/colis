import {call, put} from "redux-saga/effects";
import {
    deleteColisResp,
    getColisResp,
    postColisResp, putColisResp
} from "../../actions/index";
import {requestDeleteColis, requestGetColis, requestPostColis, requestPutColis} from "../requests/colis";

export function* handleGetColis(action) {
    try {
        const response = yield call(requestGetColis);
        const {data} = response;
        yield put(getColisResp(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handlePostColis(action) {
    try {
        const response = yield call(requestPostColis, action.payload);
        const {data} = response;
        yield put(postColisResp(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handlePutColis(action) {
    try {
        const response = yield call(requestPutColis, action.payload);
        const {data} = response;
        console.warn(data);
        yield put(putColisResp(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handleDeleteColis(action) {
    try {
        yield call(requestDeleteColis, action.payload);
        yield put(deleteColisResp(action.payload));
    } catch (error) {
        console.log(error);
    }
}
