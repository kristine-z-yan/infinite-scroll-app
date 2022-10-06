import React from 'react';

import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import {Button, Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../app/hooks";
import Typography from "@mui/material/Typography";
import Highlights from "../../features/highlights/Highlights";
import Gallery from "../../features/gallery/Gallery";

const User = () => {
    const loggedUser = useAppSelector(state => state.users.loggedUser);
    return (
        <>
            <Header />
            <Grid container spacing={2} mt='50px' alignItems='center'>
                <Grid item xs={3} mx={1}>
                    <Avatar
                        src={loggedUser.avatar}
                        aria-label="user"
                        sx={{ width: '80px', height: '80px'}}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={4}>
                            <p>33</p>
                            <p>Posts</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>334</p>
                            <p>Followers</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>123</p>
                            <p>Following</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid p={1} mb={1}>
                <Typography variant='body1'>
                    Lorem ipsum
                </Typography>
                <Typography variant='body2'>
                    The Typography component uses the variantMapping prop
                    to associate a UI variant with a semantic element.
                </Typography>
            </Grid>
            <Grid px={1} my={3}>
                <Button variant="outlined" fullWidth>Edit Profile</Button>
            </Grid>
            <Highlights />
            <Gallery />
            <Footer />
        </>
    )
}

export default User;