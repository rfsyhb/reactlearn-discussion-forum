import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai';

function VoteButton({
  id,
  authUser,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy,
  downVotesBy,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neutralizeVote(id);
  };

  return (
    <>
      {isUpVoted ? (
        <AiFillLike onClick={onNeutralizeVoteClick} />
      ) : (
        <AiOutlineLike onClick={onUpVoteClick} />
      )}
      <p className="vote-button_upvotes">{upVotesBy.length}</p>
      {isDownVoted ? (
        <AiFillDislike onClick={onNeutralizeVoteClick} />
      ) : (
        <AiOutlineDislike onClick={onDownVoteClick} />
      )}
      <p className="vote-button_downvotes">{downVotesBy.length}</p>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VoteButton;
