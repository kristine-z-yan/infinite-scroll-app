import React from 'react';
import {Avatar, Grid} from "@mui/material";

import styles from './Stories.module.css';

const Stories = () => {
    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={styles.stories}
        >
            <Grid item className={styles.storyItem}>
                <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E" />
                <p className={styles.accountName}>Your story</p>
            </Grid>
            <Grid item className={styles.storyItem}>
                <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" />
                <p className={styles.accountName}>remy_shaemy_shaemy_sharp</p>
            </Grid>
            <Grid item className={styles.storyItem}>
                <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" />
                <p className={styles.accountName}>remy_shaemy_shaemy_sharp</p>
            </Grid>
            <Grid item className={styles.storyItem}>
                <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" />
                <p className={styles.accountName}>remy_shaemy_shaemy_sharp</p>
            </Grid>
            <Grid item className={styles.storyItem}>
                <Avatar alt="Remy Sharp" className={styles.avatar} src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" />
                <p className={styles.accountName}>remy_shaemy_shaemy_sharp</p>
            </Grid>
        </Grid>
    )
}

export default Stories;