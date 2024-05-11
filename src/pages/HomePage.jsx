import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';
import ThreadList from '../components/ThreadList';

export default function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  // membuat kategori
  const categories = new Set(threads.map((thread) => thread.category));

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const onNeutralizeVoteThread = (threadId) => {
    dispatch(asyncNeutralizeVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="container">
      <div>
        <div className="homepage__action">
          <Link to="/add-thread">
            <Button variant="contained" className="action">
              Tambah Thread Baru
            </Button>
          </Link>
        </div>
        <div>
          {/* Menampilkan kategori */}
          <div className="button-category">
            <button type="button" onClick={() => setFilter('')}>Show All</button>
            {Array.from(categories).map((category) => (
              <button type="button" key={category} onClick={() => setFilter(category)}>
                #
                {category}
              </button>
            ))}
          </div>
          <ThreadList
            threads={
              filter
                ? threadList.filter((thread) => thread.category === filter)
                : threadList
            }
            upVote={onUpVoteThread}
            downVote={onDownVoteThread}
            neutralVote={onNeutralizeVoteThread}
          />
        </div>
      </div>
    </div>
  );
}
