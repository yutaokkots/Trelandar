import { useState } from 'react';
import React from 'react'

export default function LoginForm() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      });

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
      }
      
    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await usersService.login(credentials);
          setUser(user);
        } catch {
          setError('Log In Failed - Try Again');
        }
      }
  return (
    <div className="LoginForm">
        <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="email">
                <input type="text" name="email" value={credentials.email} onChange={handleChange} required/>
                <label>Email Address</label>
            </div>
            <div>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required/>
                <label>Password</label>
            </div>
            <div className="LoginButton">
                <button type="submit">LOG IN</button>
            </div>
        </form>
        </div>
    </div>
  )
}
