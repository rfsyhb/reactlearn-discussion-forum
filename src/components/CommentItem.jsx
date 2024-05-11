import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, CardActions } from '@mui/material';
import { postedAt } from '../utils';
import VoteButton from './VoteButton';
import { userShape } from './ThreadItem';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralizeVote,
  authUser,
}) {
  return (
    <section className="comment-item">
      <div className="comment-item_container">
        <div className="comment-item_profile">
          <Avatar
            className="comment-item_user-avatar"
            src={owner.avatar}
            alt={owner.name}
          />
          <p className="comment-item_user-name">{owner.name}</p>
        </div>
        <span className="comment-item_created">{postedAt(createdAt)}</span>
      </div>
      <p className="comment-item_user-content">{content}</p>
      <CardActions>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </CardActions>
    </section>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { commentShape };
