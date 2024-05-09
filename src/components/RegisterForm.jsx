import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

export default function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <label htmlFor="email">E-Mail</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};
