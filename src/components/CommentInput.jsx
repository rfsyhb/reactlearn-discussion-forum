import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');

  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };

  return (
    <div className="comment_input">
      <span className="comment_give-comment">Beri Komentar</span>
      <form className="comment_form">
        <textarea
          className="comment_form-text-area"
          value={comment}
          onChange={onCommentChange}
          rows="5"
        />
        <button
          type="button"
          className="comment_form-submit"
          onClick={onCommentSubmit}
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
