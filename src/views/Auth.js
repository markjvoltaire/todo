import React, { useState } from 'react';
import AuthForm from '../Components/AuthForm';
import { signInUser, signupUser } from '../services/users';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch (error) {
      //   console.log(error);
      setErrorMessage('Sorry Try Again');
    }
  };

  return (
    <div>
      <div className="useState">
        <button
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          {' '}
          Sign In
        </button>

        <button
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          {' '}
          Sign Up
        </button>
      </div>

      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        type={type}
        setType={setType}
      />
    </div>
  );
}
