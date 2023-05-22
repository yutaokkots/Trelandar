import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
    
    // what type of HTTP request we are replicating
    const options = { method };

    // if we included a specified payload (most likely for token auth)
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    const token = getToken();

    if(token) {

        options.headers = options.headers || {};

        options.headers.Authorization = `Bearer ${token}`;

    }

    console.log("here in the send-request.js")
    console.log("url: ", url, " options: ", options)

    const res = await fetch(url, options);

    if (res.ok) return res.json();

    throw new Error('Bad Request');

}