import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App2 from "./pages/App2/App2";
import "./style/tailwind.css";
// require('dotenv').config()

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

// <GoogleOAuthProvider /> allows access to @react-oauth/google within App.

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={googleClientId}>
            <Router>
                <App2 />
            </Router>
        </GoogleOAuthProvider>
    </React.StrictMode>

);
