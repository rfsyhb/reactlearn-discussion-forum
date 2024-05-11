import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <div className="form-page">
      <article className="login-content">
        <h2>Login User</h2>
        <LoginForm login={onLogin} />
        <p>
          Doesn&apos;t have an account?
          {' '}
          <Link to="/register">Register here</Link>
        </p>
      </article>
    </div>
  );
}
