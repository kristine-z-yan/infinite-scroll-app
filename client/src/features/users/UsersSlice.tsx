import { createSlice } from '@reduxjs/toolkit'

export interface User {
    _id: number,
    username: string,
    avatar: string,
    followees: Array<number>
    // followees: Array<User>
}

interface UserState {
    loggedUser: User
}

const initialState: UserState = {
    loggedUser: {
        _id: 1,
        username: 'john_doe',
        avatar: "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
        followees: [2,3],
    }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default usersSlice.reducer;
