import { createSlice } from '@reduxjs/toolkit'

export interface User {
    _id: number,
    username: string,
    avatar: string,
    followees: Array<User>
}

interface UserState {
    loggedUser: User
}

const initialState: UserState = {
    loggedUser: {
        _id: 1,
        username: 'john_doe',
        avatar: "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
        followees: [
            {
                _id: 2,
                username: 'lorem',
                avatar: "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
                followees: []
            },
            {
                _id: 3,
                username: 'ipsum_dolor_sit',
                avatar: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
                followees: []
            }
        ],
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default usersSlice.reducer;
