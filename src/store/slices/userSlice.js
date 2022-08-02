import { getLocalStorage } from "@utils/localStorage";

const { createSlice } = require("@reduxjs/toolkit");


const userSlice = createSlice({
    name: 'userSlice',
    initialState: getLocalStorage('user'),
    reducers: {
        addUser(state, action) {
            // console.log(action.payload);
            return state = action.payload
        },
        removeUser(state) {
            return state = {}
        }
    }
})
export default userSlice.reducer
export const { addUser } = userSlice.actions
export const { removeUser } = userSlice.actions