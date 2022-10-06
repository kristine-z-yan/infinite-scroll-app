import React, {useEffect, useRef} from 'react';
import { useState } from "react";

import {Box, Tab, Tabs} from "@mui/material";
import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import styles from './Gallery.module.css';
import Posts from '../posts/Posts';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`gallery-tabpanel-${index}`}
            aria-labelledby={`gallery-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Gallery = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginTop: '10px', marginBottom: '56px' }}>
            <Tabs value={value} onChange={handleChange} aria-label="gallery" variant='fullWidth' className={styles.tabs}>
                <Tab icon={<GridOnSharpIcon />} aria-label="posts" />
                <Tab icon={<MovieSharpIcon />} aria-label="reels" />
                <Tab icon={<PersonPinSharpIcon />} aria-label="tags" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Posts page='user' />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Tree
            </TabPanel>
        </Box>
    )
}

export default Gallery;