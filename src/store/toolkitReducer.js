import { createReducer, createAction } from "@reduxjs/toolkit"
import { omit } from 'lodash'

import { getLocalStorage } from "@utils/localStorage";

const initialState = getLocalStorage('store')

export const setPlayerToFavourite = createAction('ADD_TO_FAVOURITES')
export const removePlayerFromFavourite = createAction('REMOVE_FROM_FAVOURITES')

export default createReducer(initialState, {
    [setPlayerToFavourite]: (state, action) => {
        return state = { ...state, ...action.payload }
    },
    [removePlayerFromFavourite]: (state, action) => {
        return omit(state, [action.payload])
    }
})