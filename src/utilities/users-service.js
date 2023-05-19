import * as usersAPI from './users-api'

export async function signUp(userData){

    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();

}

export async function login(credentials){

    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();

}

export function getToken(){

    const token = localStorage.getItem('token');
    if(!token) return null

    const payload = JSON.parse(atob(token.split('.')[1]));

    // JWT's exp (expiration) property is recorded in seconds, not milliseconds
    if(payload.exp < Date.now() / 1000){ // converts to seconds

        localStorage.removeItem('token');
        return null;

    }
    return token;

}

export function getUser() {

    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;

}

export function logOut() {

    localStorage.removeItem('token');

}

export function checkToken(){

    return usersAPI.checkToken()

    // middleman for our checkToken controller function that converts the token's expiration into a Date object

    .then(dateStr => new Date(dateStr));

}