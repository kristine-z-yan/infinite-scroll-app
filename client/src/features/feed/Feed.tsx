import React, {useEffect, useState} from 'react';

import FeedItem from "./FeedItem/FeedItem";
import { Stack } from "@mui/material";
import { fetchPosts } from "./feedAPI";
import {useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {Post} from "./FeedSlice";
import {useAppSelector} from "../../app/hooks";


const Feed = () => {
    const feed = useAppSelector(state => state.feed);
    const dispatch = useDispatch<Dispatch<any>>();
    const [posts, setPost] = useState<Post[]>([]);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    useEffect(() => {
        setPost(feed.posts)
    }, [feed.posts])

    return (
        <Stack spacing={1} mb='50px'>
            {posts.map(post => (
                <FeedItem
                    key={post._id}
                    post={post}
                />
            ))}
        </Stack>
    )
}

export default Feed;