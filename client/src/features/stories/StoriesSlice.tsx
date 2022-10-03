import { createSlice } from '@reduxjs/toolkit'
import { User } from "../users/UsersSlice";

export interface Story {
    _id: number,
    user: User,
    media: string,
    date: string
}

interface StoryState {
    followeesStories: Story[]
}

const initialState: StoryState = {
    followeesStories: []
}

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        getFolloweesStoriesSuccess: (state, { payload }) => {
            return {
                ...state,
                followeesStories: payload
            }
        }
    },
})

export const StoriesActions = storiesSlice.actions;

export default storiesSlice.reducer;
