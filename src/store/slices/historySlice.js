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
                ...state,
                teams: {
                    ...state.teams, ...action.payload
                }
            }
        },
        setTeamsToHistory(state, action) {
            return { ...action.payload }
        },
        setHistoryPlayer(state, action) {
            const payload = action.payload
            return state = {
                ...state,
                players: {
                    ...state.players, ...action.payload
                }
            }
        },
        removeHistory(state) {
            return {}
        },
    }
})
export default historySlice.reducer
export const { setHistoryTeam, setTeamsToHistory, setHistoryPlayer, removeHistory } = historySlice.actions