import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersSlice from "../features/users/UsersSlice";
import storiesSlice from "../features/stories/StoriesSlice";
import feedSlice from "../features/feed/FeedSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    stories: storiesSlice,
    feed: feedSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
