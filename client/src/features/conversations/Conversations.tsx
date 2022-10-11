import React, {useEffect, useRef, useState} from 'react';

import {Stack} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {fetchConversations} from "./conversationsAPI";
import {Conversation} from "./ConversationsSlice";
import ConversationItem from './ConversationItem/ConversationItem';

type Props = {
    id: number;
};

const Conversations: React.FC<Props> = ({id}) => {
    const conversationsState = useAppSelector(state => state.conversations.all);
    const dispatch = useDispatch<Dispatch<any>>();
    const [conversations, setConversations] = useState<Conversation[]>([]);

    useEffect(() => {
        dispatch(fetchConversations(id))
    }, [])

    useEffect(() => {
        setConversations(conversationsState)
    }, [conversationsState])

    return (
        <Stack  mt='60px' spacing={1} direction="column">
            {conversations.map(item => (
                <ConversationItem key={item._id} item={item}/>
            ))}
        </Stack>
    )
}

export default Conversations;