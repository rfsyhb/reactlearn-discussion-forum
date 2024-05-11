import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboards } from '../states/leaderboards/action';
import LeaderboardsItem from '../components/LeaderboardsItem';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboards);

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <section className="leaderboards-page">
      <div className="leaderboards-page card">
        <header className="leaderboards-page__header_container">
          <h2>Klasemen Pengguna Aktif</h2>
          <h2>Skor</h2>
        </header>
        <div className="leaderboards-item__container">
          {leaderboards.map(({ user, score }) => (
            <LeaderboardsItem key={user.id} user={user} score={score} />
          ))}
        </div>
      </div>
    </section>
  );
}
