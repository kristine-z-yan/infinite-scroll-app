import React from 'react';

import {Avatar, Grid} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            className={styles.footer}
        >
            <Grid item className={styles.icon}>
                <HomeIcon />
            </Grid>
            <Grid item className={styles.icon}>
                <SearchIcon />
            </Grid>
            <Grid item className={styles.icon}>
                <PlayCircleOutlineOutlinedIcon />
            </Grid>
            <Grid item className={styles.icon}>
                <ShoppingBagOutlinedIcon />
            </Grid>
            <Grid item className={styles.icon}>
                <Avatar alt="Remy Sharp" src="https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E" />
            </Grid>
        </Grid>
    )
}

export default Footer;