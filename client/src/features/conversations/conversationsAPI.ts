import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ConversationsActions } from "./ConversationsSlice";

export function fetchConversations(user_id: number) {
    return  async (dispatch: ActionCreatorWithPayload<any>) => {
        // dispatch(getConversationsPending())
        try {
            const response = await fetch(`http://localhost:5001/conversations?user_id=${user_id}`)
            const data = await response.json();
            dispatch(ConversationsActions.getConversationsSuccess(data))
        } catch (error) {
            // dispatch(getConversationsFailure())
        }
    }
}