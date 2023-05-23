import sendRequest from "./send-request";

const BASE_URL = "http://localhost:3000";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function googleLogin(credentials) {
  console.log("here in the users-api");
  return sendRequest(`${BASE_URL}/auth/google`, "POST", credentials);
  // sendRequest(`${BASE_URL}/auth/google`);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

const { OAuth2Client } = require("google-auth-library");

async function verify(client_id, jwtToken) {
  const client = new OAuth2Client(client_id);
  // Call the verifyIdToken to
  // varify and decode it
  const ticket = await client.verifyIdToken({
    idToken: jwtToken,
    audience: client_id,
  });
  // Get the JSON with all the user info
  const payload = ticket.getPayload();
  // This is a JSON object that contains
  // all the user info
  return payload;
}
