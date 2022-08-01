const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
       user: {}
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload
        }
    }
})
export default userSlice.reducer
export const { addUser } = userSlice.actions