import { createSlice } from '@reduxjs/toolkit'
import { User } from "../users/UsersSlice";

interface Story {
    _id: number,
    user: User,
    media: string,
    date: string
}

interface StoryState {
    followeesStories: Story[]
}

const initialState: StoryState = {
    followeesStories: [
        {
            _id: 1,
            user: {
                _id: 2,
                username: 'lorem',
                avatar: "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
                followees: []
            },
            media: "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
            date: '22/09/2022'
        },
        {
            _id: 2,
            user: {
                _id: 3,
                username: 'ipsum_dolor_sit',
                avatar: "https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM",
                followees: []
            },
            media: "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
            date: '22/09/2022'
        }
    ]
}

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
})

export default storiesSlice;
