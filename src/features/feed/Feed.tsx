import React from 'react';

import FeedItem from "./FeedItem/FeedItem";
import { Stack } from "@mui/material";

const Feed = () => {
    return (
        <Stack spacing={1} mb='50px'>
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </Stack>
    )
}

export default Feed;