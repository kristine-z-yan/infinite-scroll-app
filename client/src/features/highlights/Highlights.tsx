import React from 'react';
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Carousel from "react-multi-carousel";
import { responsive } from "../../constants/breakpoints";
import AddIcon from '@mui/icons-material/Add';

import styles from './Highlights.module.css';

const Highlights = () => {
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
        >
            <Grid item className={styles.highlightItem}>
                <Avatar alt="Remy Sharp" className={styles.cover} src="https://i.picsum.photos/id/1070/5472/3648.jpg?hmac=oFxAwLeGJmas45_yf5NdpeQzexAF-tMVL6q9JwvSuo0" />
                <p className={styles.title}>Highlight 1</p>
            </Grid>
            <Grid item className={styles.highlightItem}>
                <Avatar alt="Remy Sharp" className={styles.cover} src="https://i.picsum.photos/id/1049/3900/3120.jpg?hmac=Ox2snaSyRuEofh721sagxPbwVzLtung57FNHefB8Kdw" />
                <p className={styles.title}>Highlight 2</p>
            </Grid>
            <Grid item className={styles.highlightItem}>
                <Avatar alt="Remy Sharp" className={styles.cover} src="https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc" />
                <p className={styles.title}>Highlight 3</p>
            </Grid>
            <Grid item className={styles.highlightItem}>
                <Avatar alt="add new highlight" className={styles.cover}>
                    <AddIcon />
                </Avatar>
                <p className={styles.title}>New</p>
            </Grid>
        </Carousel>
    )
}

export default Highlights;