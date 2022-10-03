import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {StoriesActions} from "./StoriesSlice";

export function fetchFolloweesStories() {
    return  async (dispatch: ActionCreatorWithPayload<any>) => {
        try {
            const response = await fetch('http://localhost:5001/stories')
            const data = await response.json();
            dispatch(StoriesActions.getFolloweesStoriesSuccess(data))
        } catch (error) {
            // dispatch(getPostsFailure())
        }
    }
}
