/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return initial state for unknown action
 *  - should return threadDetail for RECEIVE_THREAD_DETAIL action
 *  - should return threadDetail with user in upVotesBy if user was not in upVotesBy,
 *    without user in upVotesBy if user was in upVotesBy, and without user in downVotesBy
 *    if user was in downVotesBy for UP_VOTE_THREAD_DETAIL action
 *  - should return threadDetail without user in upVotesBy if user was in upVotesBy,
 *    without user in downVotesBy if user was in downVotesBy,
 *    and with user in downVotesBy if user was not in downVotesBy
 *    for DOWN_VOTE_THREAD_DETAIL action
 *  - should return threadDetail without user in upVotesBy and downVotesBy if user
 *    was in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return threadDetail with new comments for CREATE_COMMENT action
 *  - should return threadDetail with the comments upVotesBy including the user
 *    if the user was not in upVotesBy, without the user in upVotesBy if the user was
 *    in upVotesBy, and without the user in downVotesBy if the user was in
 *    downVotesBy for UP_VOTE_COMMENT action.
 *  - should return threadDetail with the comments downVotesBy including
 *    the user if the user was not in downVotesBy, without the user in downVotesBy
 *    if the user was in downVotesBy, and without the user in upVotesBy if the user
 *    was in upVotesBy for DOWN_VOTE_COMMENT action.
 *  - should return threadDetail with the comments upVotesBy and downVotesBy without user
 *    if user was in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_COMMENT action
 *
 */
import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return initial state for unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return threadDetail for RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it(`should return threadDetail with user in upVotesBy if user was not in upVotesBy, 
      without user in upVotesBy if user was in upVotesBy, and without user in downVotesBy 
      if user was in downVotesBy for UP_VOTE_THREAD_DETAIL action`, () => {
    // arrange
    // action
    // assert
  });

  it(`should return threadDetail without user in upVotesBy if user was in upVotesBy,
      without user in downVotesBy if user was in downVotesBy, and with user in downVotesBy 
      if user was not in downVotesBy for DOWN_VOTE_THREAD_DETAIL action`, () => {
    // arrange
    // action
    // assert
  });

  it(`should return threadDetail without user in upVotesBy and downVotesBy if user was 
      in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_THREAD_DETAIL action`, () => {
    // arrange
    // action
    // assert
  });

  it('should return threadDetail with new comments for CREATE_COMMENT action', () => {
    // arrange
    // action
    // assert
  });

  it(`should return threadDetail with the comments upVotesBy including the user
      if the user was not in upVotesBy, without the user in upVotesBy if the user was
      in upVotesBy, and without the user in downVotesBy if the user was in
      downVotesBy for UP_VOTE_COMMENT action.`, () => {
    // arrange
    // action
    // assert
  });

  it(`should return threadDetail with the comments downVotesBy including
      the user if the user was not in downVotesBy, without the user in downVotesBy
      if the user was in downVotesBy, and without the user in upVotesBy if the user
      was in upVotesBy for DOWN_VOTE_COMMENT action.`, () => {
    // arrange
    // action
    // assert
  });

  it(`should return threadDetail with the comments upVotesBy and downVotesBy without 
      user if user was in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_COMMENT 
      action`, () => {
    // arrange
    // action
    // assert
  });
});
