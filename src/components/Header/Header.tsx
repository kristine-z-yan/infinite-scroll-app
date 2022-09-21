import React from 'react';

import logoIcon  from '../../assets/images/logo.svg.png';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AbcIcon from '@mui/icons-material/Abc';
import styles from './Header.module.css';
import {Grid} from "@mui/material";

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
                     <MessageRoundedIcon />
                 </span>
            </Grid>
        </Grid>
    )
}

export default Header;