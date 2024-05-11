import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { userShape } from './ThreadItem';

export default function LeaderboardsItem({ user, score }) {
  return (
    <div className="leaderboard_item">
      <Avatar
        className="leaderboard_item-avatar"
        src={user.avatar}
        alt={user.name}
        sx={{ width: 56, height: 56 }}
      />
      <p className="leaderboard_item-name">{user.name}</p>
      <h3 className="leaderboard_item-score">{score}</h3>
    </div>
  );
}

LeaderboardsItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
