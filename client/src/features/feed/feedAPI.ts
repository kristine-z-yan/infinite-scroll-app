import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {FeedActions} from "./FeedSlice";

export function fetchPosts() {
    return  async (dispatch: ActionCreatorWithPayload<any>) => {
        // dispatch(getPostsPending())
        try {
            const response = await fetch('http://localhost:5001/posts/?page=1')
            const data = await response.json();
            dispatch(FeedActions.getPostsSuccess(data))
        } catch (error) {
            // dispatch(getPostsFailure())
        }
    }
}
export function fetchNextPosts(page: number) {
    return  async (dispatch: ActionCreatorWithPayload<any>) => {
        // dispatch(getPostsPending())
        try {
            const response = await fetch('http://localhost:5001/posts/?page=' + page)
            const data = await response.json();
            dispatch(FeedActions.getNextPostsSuccess(data))
        } catch (error) {
            // dispatch(getPostsFailure())
        }
    }
}
