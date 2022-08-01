const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLogin: false
    },
    reducers: {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        },
    }
})
export default loginSlice.reducer
export const { login } = loginSlice.actions
export const { logout } = loginSlice.actions

