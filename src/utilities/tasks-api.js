import sendRequest from "./send-request";
const BASE_URL = "/api/tasks";

export function getCategories() {
    return sendRequest(`${BASE_URL}/getcategories`)
}

export function getTasks() {
    return sendRequest(`${BASE_URL}/gettasks`)
}