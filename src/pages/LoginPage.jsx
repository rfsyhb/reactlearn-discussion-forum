import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
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
    <section className="login-page">
      <header className="login-page__hero">
        <h1>
          <IoEarthOutline />
        </h1>
      </header>
      <article className="login-page__main">
        <h2>Login</h2>
        <LoginForm login={onLogin} />

        <p>
          Doesn't have an account? <Link to="/register">Register here</Link>
        </p>
      </article>
    </section>
  );
}
