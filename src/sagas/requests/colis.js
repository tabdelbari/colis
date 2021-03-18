import {API_URL} from "../../constants/api";
import axios from "axios";

export function requestGetColis() {
    return axios.request({
        method: "get",
        url: API_URL + "/colis"
    });
}

export function requestPostColis(colis) {
    return axios.request({
        method: "post",
        url: API_URL + "/colis",
        data: colis
    });
}

export function requestPutColis(colis) {
    return axios.request({
        method: "put",
        url: API_URL + "/colis/" + colis.id,
        data: colis
    });
}

export function requestDeleteColis(colisIds) {
    return axios.request({
        method: "delete",
        url: API_URL + "/colis",
        data: colisIds
    });
}
