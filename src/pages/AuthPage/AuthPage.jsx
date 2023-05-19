import React from 'react'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage() {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="AuthPage">
      <div>
      {showLogin ? 
      <LoginForm setUser={setUser} /> : 
      <SignUpForm setUser={setUser} />}
      </div>
        <div className="underline text-center text-white hover:scale-125 w-full max-w-xs"onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
          'First time here? Create an account' : 
          'Welcome back! Please sign in'}
          </div>
       
    </div>
  )
}
