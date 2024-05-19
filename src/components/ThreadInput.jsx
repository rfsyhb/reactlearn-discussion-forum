import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

export default function ThreadInput({ addThread }) {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useInput('');
  const navigate = useNavigate('');

  return (
    <form className="input-thread">
      <label htmlFor="title">
        Judul
        <input
          type="text"
          value={title}
          id="title"
          onChange={setTitle}
          placeholder="Title"
        />
      </label>
      <label htmlFor="category">
        Kategori
        <input
          type="text"
          value={category}
          id="category"
          onChange={setCategory}
          placeholder="Category"
        />
      </label>
      <label htmlFor="body">
        Isi Pesan
        <textarea
          type="text"
          value={body}
          id="body"
          onChange={setBody}
          rows="4"
          placeholder="Body"
        />
      </label>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          addThread({ title, body, category });
          navigate('/');
        }}
      >
        Buat Thread
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
