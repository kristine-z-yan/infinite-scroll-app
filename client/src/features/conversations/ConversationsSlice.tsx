import {createSlice} from "@reduxjs/toolkit";
import {User} from "../users/UsersSlice";
import {Post} from "../posts/PostsSlice";

export interface Conversation {
    _id: number,
    members: number[],
    date: string,
    users: User[],
}

interface ConversationSlice {
    all: Conversation[],
}

const initialState: ConversationSlice = {
    all: [],
}

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        getConversationsSuccess: (state, {payload}) => {
            return {
                ...state,
                all: payload
            }
        }
    },
})

export const ConversationsActions = conversationsSlice.actions;

export default conversationsSlice.reducer