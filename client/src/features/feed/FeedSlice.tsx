import {createSlice} from "@reduxjs/toolkit";
import {User} from "../users/UsersSlice";

export interface Post {
    _id: number,
    user_id: number,
    media: string,
    comments: [],
    description: string,
    likes: number,
    location: string,
    user: User,
    date: string
}

interface FeedSlice {
    posts: Post[]
}

const initialState: FeedSlice = {
    posts: []
}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        getPostsSuccess: (state, { payload }) => {
            return {
                ...state,
                posts: payload
            }
        }
    },
})

export const FeedActions = feedSlice.actions;


export default feedSlice.reducer