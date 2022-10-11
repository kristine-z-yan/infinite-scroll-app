import React, {useEffect, useState} from 'react';
import {Conversation} from "../ConversationsSlice";
import {Grid, styled, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {useAppSelector} from "../../../app/hooks";
import {User} from "../../users/UsersSlice";
import Badge from '@mui/material/Badge';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import {Link} from "react-router-dom";

type Props = {
    item: Conversation;
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ConversationItem: React.FC<Props> = ({item}) => {
    const { _id } = useAppSelector(state => state.users.loggedUser);
    const [chatMember, setChatMember] = useState<User>()

    useEffect(() => {
        const user = item.users.find(item => item._id != _id);
        setChatMember(user);
    },[])
    return (
        <Link to={`/conversations/${chatMember?._id}`} style={{textDecoration: 'none'}}>
            <Grid container alignItems='center'>
                <Grid item xs={2} mx={1}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            src={chatMember?.avatar}
                            aria-label="user"
                            sx={{ width: '60px', height: '60px'}}
                        />
                    </StyledBadge>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='body1' color='white'>{chatMember?.username}</Typography>
                    <Typography variant='caption' color='secondary'>Seen 2m ago</Typography>
                </Grid>
                <Grid item xs={1} color='white'>
                    <CameraAltOutlinedIcon />
                </Grid>
            </Grid>
        </Link>
    )
}

export default ConversationItem;