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

interface PostsSlice {
    followees: Post[],
    user: Post[]
}

const initialState: PostsSlice = {
    followees: [],
    user: []
}

const postsSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        getFolloweesPostsSuccess: (state, { payload }) => {
            return {
                ...state,
                followees: payload
            }
        },
        getFolloweesNextPostsSuccess: (state, { payload }) => {
            return {
                ...state,
                followees: [ ...state.followees, ...payload]
            }
        },
        getUserPostsSuccess: (state, { payload }) => {
            return {
                ...state,
                user: payload
            }
        },
        getUserNextPostsSuccess: (state, { payload }) => {
            return {
                ...state,
                user: [ ...state.user, ...payload]
            }
        },
    },
})

export const PostsActions = postsSlice.actions;

export default postsSlice.reducer