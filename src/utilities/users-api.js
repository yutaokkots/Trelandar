import sendRequest from "./send-request";

const BASE_URL = "/api/auth";

export function signUp(userData) {
  return sendRequest(`${BASE_URL}/signUp`, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function googleLogin(credentials) {
  return sendRequest(`${BASE_URL}/googleSignin`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// const { OAuth2Client } = require("google-auth-library");

// async function verify(client_id, jwtToken) {
//   const client = new OAuth2Client(client_id);
//   // Call the verifyIdToken to
//   // varify and decode it
//   const ticket = await client.verifyIdToken({
//     idToken: jwtToken,
//     audience: client_id,
//   });
//   // Get the JSON with all the user info
//   const payload = ticket.getPayload();
//   // This is a JSON object that contains
//   // all the user info
//   return payload;
// }
