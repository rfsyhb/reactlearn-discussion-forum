import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <h1>
          <IoEarthOutline />
        </h1>
      </header>
      <article className="register-page__main">
        <h2>Create your account</h2>
        <RegisterForm register={onRegister} />

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}
