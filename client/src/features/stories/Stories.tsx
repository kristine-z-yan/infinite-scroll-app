import React, {useEffect, useState} from 'react';
import {Avatar, Grid} from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Stories.module.css';
import {useAppSelector} from "../../app/hooks";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {fetchFolloweesStories} from "./StoriesApi";
import {Story} from "./StoriesSlice";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 444, min: 0 },
        items: 5,
        slidesToSlide: 3
    }
};

const Stories = () => {
    const loggedUser = useAppSelector(state => state.users.loggedUser);
    const followeesStoriesData = useAppSelector(state => state.stories.followeesStories);
    const [followeesStories, setFolloweesStories] = useState<Story[]>([])

    const dispatch = useDispatch<Dispatch<any>>();

    useEffect(()=>{
        dispatch(fetchFolloweesStories())
    },[])

    useEffect(() => {
        setFolloweesStories(followeesStoriesData)
    }, [followeesStoriesData])

    return (
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                className={styles.stories}
            >
                <Grid item className={styles.storyItem}>
                    <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E" />
                    <p className={styles.accountName}>Your story</p>
                </Grid>
                { followeesStories.map(story => (
                    <Grid item className={styles.storyItem} key={story._id}>
                        <Avatar alt={story.user.username} className={styles.avatar} src={story.user.avatar} />
                        <p className={styles.accountName}>{story.user.username}</p>
                    </Grid>
                ))}
            </Carousel>
    )
}

export default Stories;