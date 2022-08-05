import { getLocalStorage } from "@utils/localStorage";

const { createSlice } = require("@reduxjs/toolkit");

const historySlice = createSlice({
    name: 'historySlice',
    // initialState: typeof getLocalStorage('isLogin') === 'object' ? false : getLocalStorage('isLogin'),
    initialState: getLocalStorage('history'),
    // initialState: {},
    reducers: {
        setHistoryTeam(state, action) {
            const payload = action.payload
            return state = {
                teams: {
                    ...state.teams, ...action.payload
                }
            }
        },
        removeHistory(state) {
            return state = {}
        },
    }
})
export default historySlice.reducer
export const { setHistoryTeam, removeHistory } = historySlice.actions