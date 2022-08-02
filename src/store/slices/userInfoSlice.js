const { createSlice } = require("@reduxjs/toolkit");

const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    initialState: [],
    // initialState: Array.isArray(getLocalStorage('users')) ? getLocalStorage('users') : [],
    reducers: {
        rememberNewUser(state, action) {
            return state = [...action.payload]
        }
    }
})


export default userInfoSlice.reducer
export const { rememberNewUser } = userInfoSlice.actions