import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="error-page">
      <h1>Oops! 404</h1>
      <p>Halaman yang anda cari tidak ditemukan!</p>
      <button type="button">
        <Link to="/">Kembali</Link>
      </button>
    </div>
  );
}
