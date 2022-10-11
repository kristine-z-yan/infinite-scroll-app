import React from 'react';

import AddSharpIcon from '@mui/icons-material/AddSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AbcIcon from '@mui/icons-material/Abc';
import styles from './Header.module.css';
import {Avatar, Grid} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.header}
        >
            <Grid item>
                <span className={styles.icon}>
                     <AbcIcon sx={{fontSize: '2rem'}}/>
                </span>
            </Grid>
            <Grid item>
                 <span className={styles.icon}>
                     <AddSharpIcon />
                 </span>
                 <span className={styles.icon}>
                     <FavoriteBorderSharpIcon />
                 </span>
                 <span className={styles.icon}>
                     <Link to="/messenger">
                        <MessageRoundedIcon />
                    </Link>
                 </span>
            </Grid>
        </Grid>
    )
}

export default Header;