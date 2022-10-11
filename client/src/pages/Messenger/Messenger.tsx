import React from 'react';

import Conversations from "../../features/conversations/Conversations";
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import {useAppSelector} from "../../app/hooks";

import styles from './Messenger.module.css';

const Messenger = () => {
    const { _id, username } = useAppSelector(state => state.users.loggedUser);

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={styles.header}
            >
                <Grid item alignItems='center'>
                   <Link to='/' className={styles.back}>
                       <ArrowBackIosNewOutlinedIcon fontSize='small'/>
                       <Typography variant="h5" component='span'>
                           {username}
                       </Typography>
                   </Link>
                </Grid>
                <Grid item mr={3}>
                    <RateReviewOutlinedIcon />
                </Grid>
            </Grid>
            <Conversations id={_id}/>
        </>
    )
}

export default Messenger;