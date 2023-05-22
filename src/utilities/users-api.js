import sendRequest from './send-request';

const BASE_URL = ""

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function googleLogin() {
    console.log("here in the users-api")
    return sendRequest(`${BASE_URL}/auth/google`);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}