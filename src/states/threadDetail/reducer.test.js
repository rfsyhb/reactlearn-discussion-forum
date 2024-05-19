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
    const initialState = {
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
    };

    // 1
    const actionUpVoteNoUser = {
      type: 'UP_VOTE_THREAD',
      payload: {
        userId: 'testUser-1',
      },
    };

    const expectedStateUpVoteNoUser = {
      ...initialState,
      upVotesBy: ['testUser-1'],
    };

    // 2
    const actionUpVoteAvailableUser = {
      type: 'UP_VOTE_THREAD',
      payload: {
        userId: 'testUser-1',
      },
    };

    const expectedStateUpVoteAvailableUser = {
      ...initialState,
      upVotesBy: [],
    };

    // 3
    const initialStateWithDownVote = {
      ...initialState,
      downVotesBy: ['testUser-2'],
    };

    const actionUpVoteAvailableUserDownVote = {
      type: 'UP_VOTE_THREAD',
      payload: {
        userId: 'testUser-2',
      },
    };

    const expectedStateUpVoteAvailableUserDownVote = {
      ...initialState,
      upVotesBy: ['testUser-2'],
      downVotesBy: [],
    };

    // action 1: up vote when user not in upVotesBy
    const nextStateUpVoteNoUser = threadDetailReducer(
      initialState,
      actionUpVoteNoUser,
    );

    // assert 1
    expect(nextStateUpVoteNoUser).toEqual(expectedStateUpVoteNoUser);

    // action 2: up vote when user already in upVotesBy
    const nextStateUpVoteAvailableUser = threadDetailReducer(
      nextStateUpVoteNoUser,
      actionUpVoteAvailableUser,
    );

    // assert 2
    expect(nextStateUpVoteAvailableUser).toEqual(
      expectedStateUpVoteAvailableUser,
    );

    // action 3: up vote when user already in downVotesBy
    const nextStateUpVoteAvailableDownVote = threadDetailReducer(
      initialStateWithDownVote,
      actionUpVoteAvailableUserDownVote,
    );

    // assert 3
    expect(nextStateUpVoteAvailableDownVote).toEqual(
      expectedStateUpVoteAvailableUserDownVote,
    );
  });

  it(`should return threadDetail without user in upVotesBy if user was in upVotesBy,
      without user in downVotesBy if user was in downVotesBy, and with user in downVotesBy 
      if user was not in downVotesBy for DOWN_VOTE_THREAD_DETAIL action`, () => {
    // arrange
    const initialState = {
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
      upVotesBy: ['testUser-1'],
      downVotesBy: ['testUser-3'],
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
    };

    // 1
    const actionDownVoteNoUser = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        userId: 'testUser-2',
      },
    };

    const expectedStateDownVoteNoUser = {
      ...initialState,
      upVotesBy: ['testUser-1'],
      downVotesBy: ['testUser-3', 'testUser-2'],
    };

    // 2
    const actionDownVoteAvailableUserUpVote = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        userId: 'testUser-1',
      },
    };

    const expectedStateDownVoteAvailableUserUpVote = {
      ...initialState,
      upVotesBy: [],
      downVotesBy: ['testUser-3', 'testUser-1'],
    };

    // 3
    const actionDownVoteAvailableUserDownVote = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        userId: 'testUser-3',
      },
    };

    const expectedStateDownVoteAvailableUserDownVote = {
      ...initialState,
      upVotesBy: ['testUser-1'],
      downVotesBy: [],
    };

    // action 1: down vote when user not in downVotesBy
    const nextStateDownVoteNoUser = threadDetailReducer(
      initialState,
      actionDownVoteNoUser,
    );

    // assert 1
    expect(nextStateDownVoteNoUser).toEqual(expectedStateDownVoteNoUser);

    // action 2: down vote when user already in upVotesBy
    const nextStateDownVoteAvailableUserUpVote = threadDetailReducer(
      initialState,
      actionDownVoteAvailableUserUpVote,
    );

    // assert 2
    expect(nextStateDownVoteAvailableUserUpVote).toEqual(
      expectedStateDownVoteAvailableUserUpVote,
    );

    // action 3: down vote when user already in downVotesBy
    const nextStateDownVoteAvailableUserDownVote = threadDetailReducer(
      initialState,
      actionDownVoteAvailableUserDownVote,
    );

    // assert 3
    expect(nextStateDownVoteAvailableUserDownVote).toEqual(
      expectedStateDownVoteAvailableUserDownVote,
    );
  });

  it(`should return threadDetail without user in upVotesBy and downVotesBy if user was 
      in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_THREAD_DETAIL action`, () => {
    // arrange
    const initialState = {
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
      upVotesBy: ['testUser-1'],
      downVotesBy: ['testUser-2'],
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
    };

    const actionNeutralizeUpVote = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        userId: 'testUser-1',
      },
    };

    const expectedStateNeutralizeUpVote = {
      ...initialState,
      upVotesBy: [],
    };

    const actionNeutralizeDownVote = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        userId: 'testUser-2',
      },
    };

    const expectedStateNeutralizeDownVote = {
      ...initialState,
      downVotesBy: [],
    };

    // action 1: neutralize vote when user was in upVotesBy
    const nextStateNeutralizeUpVote = threadDetailReducer(
      initialState,
      actionNeutralizeUpVote,
    );

    // assert 1
    expect(nextStateNeutralizeUpVote).toEqual(expectedStateNeutralizeUpVote);

    // action 2: neutralize vote when user was in downVotesBy
    const nextStateNeutralizeDownVote = threadDetailReducer(
      initialState,
      actionNeutralizeDownVote,
    );

    // assert 2
    expect(nextStateNeutralizeDownVote).toEqual(
      expectedStateNeutralizeDownVote,
    );
  });

  it('should return threadDetail with new comments for CREATE_COMMENT action', () => {
    // arrange
    const initialState = {
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
      upVotesBy: ['testUser-1'],
      downVotesBy: ['testUser-2'],
      comments: [],
    };

    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    const expectedState = {
      ...initialState,
      comments: [action.payload.comment],
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(expectedState);
  });

  it(`should return threadDetail with the comments upVotesBy including the user
      if the user was not in upVotesBy, without the user in upVotesBy if the user was
      in upVotesBy, and without the user in downVotesBy if the user was in
      downVotesBy for UP_VOTE_COMMENT action.`, () => {
    // arrange
    const initialState = {
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
          downVotesBy: ['testUser-2'],
        },
      ],
    };

    const actionUpVoteCommentNoUser = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-1',
      },
    };

    const expectedStateUpVoteCommentNoUser = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: ['testUser-1'],
        },
      ],
    };

    const actionUpVoteCommentAvailableUser = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-1',
      },
    };

    const expectedStateUpVoteCommentAvailableUser = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
        },
      ],
    };

    const actionUpVoteCommentAvailableUserDownVote = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-2',
      },
    };

    const expectedStateUpVoteCommentAvailableUserDownVote = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: ['testUser-2'],
          downVotesBy: [],
        },
      ],
    };

    // action 1: up vote comment when user not in upVotesBy
    const nextStateUpVoteCommentNoUser = threadDetailReducer(
      initialState,
      actionUpVoteCommentNoUser,
    );

    // assert 1
    expect(nextStateUpVoteCommentNoUser).toEqual(
      expectedStateUpVoteCommentNoUser,
    );

    // action 2: up vote comment when user already in upVotesBy
    const nextStateUpVoteCommentAvailableUser = threadDetailReducer(
      expectedStateUpVoteCommentNoUser,
      actionUpVoteCommentAvailableUser,
    );

    // assert 2
    expect(nextStateUpVoteCommentAvailableUser).toEqual(
      expectedStateUpVoteCommentAvailableUser,
    );

    // action 3: up vote comment when user already in downVotesBy
    const nextStateUpVoteCommentAvailableUserDownVote = threadDetailReducer(
      initialState,
      actionUpVoteCommentAvailableUserDownVote,
    );

    // assert 3
    expect(nextStateUpVoteCommentAvailableUserDownVote).toEqual(
      expectedStateUpVoteCommentAvailableUserDownVote,
    );
  });

  it(`should return threadDetail with the comments downVotesBy including
      the user if the user was not in downVotesBy, without the user in downVotesBy
      if the user was in downVotesBy, and without the user in upVotesBy if the user
      was in upVotesBy for DOWN_VOTE_COMMENT action.`, () => {
    // arrange
    const initialState = {
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
          upVotesBy: ['testUser-2'],
          downVotesBy: [],
        },
      ],
    };

    const actionDownVoteCommentNoUser = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-1',
      },
    };

    const expectedStateDownVoteCommentNoUser = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: ['testUser-1'],
        },
      ],
    };

    const actionDownVoteCommentAvailableUser = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-1',
      },
    };

    const initialStateWithDownVote = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: ['testUser-1'],
        },
      ],
    };

    const expectedStateDownVoteCommentAvailableUser = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [],
        },
      ],
    };

    const actionDownVoteCommentAvailableUserUpVote = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-2',
      },
    };

    const expectedStateDownVoteCommentAvailableUserUpVote = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: ['testUser-2'],
        },
      ],
    };

    // action 1: down vote comment when user not in downVotesBy
    const nextStateDownVoteCommentNoUser = threadDetailReducer(
      initialState,
      actionDownVoteCommentNoUser,
    );

    // assert 1
    expect(nextStateDownVoteCommentNoUser).toEqual(
      expectedStateDownVoteCommentNoUser,
    );

    // action 2: down vote comment when user already in downVotesBy
    const nextStateDownVoteCommentAvailableUser = threadDetailReducer(
      initialStateWithDownVote,
      actionDownVoteCommentAvailableUser,
    );

    // assert 2
    expect(nextStateDownVoteCommentAvailableUser).toEqual(
      expectedStateDownVoteCommentAvailableUser,
    );

    // action 3: down vote comment when user already in upVotesBy
    const nextStateDownVoteCommentAvailableUserUpVote = threadDetailReducer(
      initialState,
      actionDownVoteCommentAvailableUserUpVote,
    );

    // assert 3
    expect(nextStateDownVoteCommentAvailableUserUpVote).toEqual(
      expectedStateDownVoteCommentAvailableUserUpVote,
    );
  });

  it(`should return threadDetail with the comments upVotesBy and downVotesBy without 
      user if user was in upVotesBy or downVotesBy for NEUTRALIZE_VOTE_COMMENT 
      action`, () => {
    // arrange
    const initialState = {
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
          upVotesBy: ['testUser-1'],
          downVotesBy: ['testUser-2'],
        },
      ],
    };

    const actionNeutralizeVoteInUpVotes = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-1',
      },
    };

    const expectedStateNeutralizeVoteInUpVotes = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
        },
      ],
    };

    const actionNeutralizeVoteInDownVotes = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'testUser-2',
      },
    };

    const expectedStateNeutralizeVoteInDownVotes = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [],
        },
      ],
    };

    // action 1: neutralize vote when user was in upVotesBy
    const nextStateNeutralizeVoteInUpVotes = threadDetailReducer(
      initialState,
      actionNeutralizeVoteInUpVotes,
    );

    // assert 1
    expect(nextStateNeutralizeVoteInUpVotes).toEqual(
      expectedStateNeutralizeVoteInUpVotes,
    );

    // action 2: neutralize vote when user was in downVotesBy
    const nextStateNeutralizeVoteInDownVotes = threadDetailReducer(
      initialState,
      actionNeutralizeVoteInDownVotes,
    );

    // assert 2
    expect(nextStateNeutralizeVoteInDownVotes).toEqual(
      expectedStateNeutralizeVoteInDownVotes,
    );
  });
});
