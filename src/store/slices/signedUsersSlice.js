import { getLocalStorage } from "@utils/localStorage";

const { createSlice } = require("@reduxjs/toolkit");

const signedUsersSlice = createSlice({
    name: 'signedUsersSlice',
    initialState: Array.isArray(getLocalStorage('users')) ? getLocalStorage('users') : [],
    reducers: {
        signUser(state, action) {
            state.push(action.payload)
        }
    }
})


export default signedUsersSlice.reducer
export const { signUser } = signedUsersSlice.actions