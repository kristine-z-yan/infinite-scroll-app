import React, {useEffect, useRef, useState} from 'react';

import FeedItem from "./FeedItem/FeedItem";
import { Stack} from "@mui/material";
import {fetchNextPosts, fetchPosts} from "./feedAPI";
import {useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Post } from "./FeedSlice";
import { useAppSelector } from "../../app/hooks";
const _ = require('lodash');


const Feed = () => {
    const feed = useAppSelector(state => state.feed);
    const dispatch = useDispatch<Dispatch<any>>();
    const [posts, setPost] = useState<Post[]>([]);
    const pageRef = useRef(2);

    const handleScroll = _.throttle((e: { currentTarget: any; }) => {
        if (window.scrollY ) {
            if (yRef.current > window.scrollY) {
            } else if (yRef.current < window.scrollY) {
                dispatch(fetchNextPosts(pageRef.current++));

            }
            yRef.current = window.scrollY;
        }
    }, 2000)

    const yRef = useRef(window.scrollY);

    useEffect(() => {
        yRef.current = window.scrollY;
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchPosts());
        // window.addEventListener('scroll', handleScroll );
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])



    useEffect(() => {
        setPost(feed.posts)
    }, [feed.posts])

    return (
        <Stack mb='50px' spacing={1}>
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