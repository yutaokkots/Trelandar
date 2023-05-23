import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./pages/App";
import "./style/tailwind.css";
// require('dotenv').config()

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={googleClientId}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
