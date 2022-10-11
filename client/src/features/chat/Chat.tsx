import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import styles from "../../pages/Messenger/Messenger.module.css";
import {Link} from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const Chat = () => {
    return (
        <Container maxWidth="sm">
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
        </Container>
    )
}

export default Chat;