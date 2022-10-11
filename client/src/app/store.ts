import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersSlice from "../features/users/UsersSlice";
import storiesSlice from "../features/stories/StoriesSlice";
import postsSlice from "../features/posts/PostsSlice";
import conversationsSlice from "../features/conversations/ConversationsSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    stories: storiesSlice,
    posts: postsSlice,
    conversations: conversationsSlice,
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
