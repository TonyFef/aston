
import { omit } from 'lodash'
import { getLocalStorage } from "@utils/localStorage";

const { createSlice } = require("@reduxjs/toolkit");

const favouriitesSlice = createSlice({
    name: 'favouriitesSlice',
    initialState: getLocalStorage('favourites'),
    reducers: {
        setPlayerToFavourite(state, action) {
            return { ...state, ...action.payload }
        },
        removePlayerFromFavourite(state, action) {
            return [omit(state, [action.payload])]
        },
        setPlayersToFavourite(state, action) {
            return { ...action.payload }
        },
        deleteFavourites(state, action) {
            return {}
        },
    }
})
export default favouriitesSlice.reducer
export const { setPlayerToFavourite, setPlayersToFavourite, removePlayerFromFavourite, deleteFavourites } = favouriitesSlice.actions
// export const { removePlayerFromFavourite } = favouriitesSlice.actions
// export const { deleteFavourites } = favouriitesSlice.actions