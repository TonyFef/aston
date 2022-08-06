import { getLocalStorage } from "@utils/localStorage";

const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: typeof getLocalStorage('isLogin') === 'object' ? false : getLocalStorage('isLogin'),
    reducers: {
        login(state) {
            return state = true
        },
        logout(state) {
            return state = false
        },
    }
})
export default loginSlice.reducer
export const { login, logout } = loginSlice.actions

