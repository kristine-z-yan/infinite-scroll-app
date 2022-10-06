import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import { PostsActions } from "./PostsSlice";

export function fetchFolloweesPosts(id: number, followees: number[]) {
    return fetchPosts(1, id, followees)
}

export function fetchFolloweesNextPosts(page: number, id: number, followees: number[]) {
    return fetchPosts(page, id, followees)
}

export function fetchUserPosts(id: number) {
    return fetchPosts(1, id, [])
}

export function fetchUserNextPosts(page: number, id: number) {
    return fetchPosts(page, id)
}

export function fetchPosts(page: number, user_id: number, followees: number[] = []) {
    return  async (dispatch: ActionCreatorWithPayload<any>) => {
        // dispatch(getPostsPending())
        try {
            console.log(followees);
            const url = followees.length ? `http://localhost:5001/followees-posts/?page=${page}` : `http://localhost:5001/posts/?page=${page}&user_id=${user_id}`
            const response = await fetch(url)
            const data = await response.json();
            if (!followees.length) {
                page === 1 ? dispatch(PostsActions.getUserPostsSuccess(data)) : dispatch(PostsActions.getUserNextPostsSuccess(data))
            } else {
                page === 1 ? dispatch(PostsActions.getFolloweesPostsSuccess(data)) : dispatch(PostsActions.getFolloweesNextPostsSuccess(data))
            }
        } catch (error) {
            // dispatch(getPostsFailure())
        }
    }
}