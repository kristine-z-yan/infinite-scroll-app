import React, {useEffect, useRef, useState} from 'react';
import {ImageList, ImageListItem, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import _ from "lodash";
import { fetchPosts } from "./postsAPI";
import { useAppSelector } from "../../app/hooks";
import FeedItem from "../feed/FeedItem/FeedItem";
import { Post } from "./PostsSlice";

type Props = {
    page: string;
};

const Posts: React.FC<Props> = ({page}) => {
    const { _id, followees } = useAppSelector(state => state.users.loggedUser);
    const postsState = useAppSelector(state => state.posts);
    const dispatch = useDispatch<Dispatch<any>>();
    const [posts, setPosts] = useState<Post[]>([]);
    const pageRef = useRef(2);

    const handleScroll = _.throttle((e: { currentTarget: any; }) => {
        if (window.scrollY ) {
            if (yRef.current < window.scrollY) {
                page === 'home' ? dispatch(fetchPosts(pageRef.current++, _id, followees)) : dispatch(fetchPosts(pageRef.current++, _id));
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
        const fetchRequest = page === 'home' ? fetchPosts(1, _id, followees) : fetchPosts(1, _id)
        dispatch(fetchRequest);
    }, [])

    useEffect(() => {
        page === 'home' ? setPosts(postsState.followees) : setPosts(postsState.user)
    }, [postsState])

    return (
        <>
            { page === 'home' ?
                <Stack mb='50px' spacing={1}>
                    {posts.map(post => (
                        <FeedItem
                            key={post._id}
                            post={post}
                        />
                    ))}
                </Stack>
                :
                <ImageList sx={{width: '100%', paddingBottom: '50px'}} cols={3} rowHeight={146} gap={1}>
                    {posts.map((post) => (
                        <ImageListItem key={post.media}>
                            <img
                                src={`${post.media}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${post.media}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            }
        </>
    )
}

export default Posts;