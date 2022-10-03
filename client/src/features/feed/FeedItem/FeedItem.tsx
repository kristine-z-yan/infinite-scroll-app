import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import styles from './FeedItem.module.css';
import {Post} from "../FeedSlice";

type Props = {
    post: Post;
};

const FeedItem: React.FC<Props> = (props) => {

    const {
        _id,
        user_id,
        media,
        comments,
        description,
        likes,
        location,
        user,
    } = props.post;

    return (
        <Card className={styles.feedItem}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={user.avatar}
                            sx={{ bgcolor: red[500] }}
                            aria-label="user"
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreHorizIcon />
                        </IconButton>
                    }
                    title={user.username}
                    subheader={location}
                />
                <CardMedia
                    component="img"
                    height="444"
                    image={media}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="likes">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="comments">
                        <SmsRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="send">
                        <SendRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="save" sx={{marginLeft: 'auto'}}>
                        <BookmarkBorderSharpIcon />
                    </IconButton>
                </CardActions>
                <CardContent sx={{padding: '0 16px'}}>
                    <Typography variant="body1">{likes} likes</Typography>
                    <div>
                        <Typography variant="body2"  component="span">{user.username}</Typography>
                        <Typography variant="body2" color="text.secondary" component="span" marginLeft={1}>
                            {description}
                        </Typography>
                    </div>
                    <Typography variant="subtitle2" display="block" my={1} color="text.secondary">
                        View all comments
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="text.secondary">
                        1 day ago
                    </Typography>
                </CardContent>

            </Card>
    )
}

export default FeedItem;