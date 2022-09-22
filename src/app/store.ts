import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersSlice from "../features/users/UsersSlice";
import storiesSlice from "../features/stories/StoriesSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    stories: storiesSlice.reducer,
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
