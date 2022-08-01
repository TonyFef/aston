import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import { setLocalStorage } from "@utils/localStorage";

import signedUsersSlice from './slices/signedUsersSlice'
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    users: signedUsersSlice,
    user: userSlice,
    isLogin: loginSlice
})

export const store = configureStore({
    reducer: rootReducer
})

store.subscribe(() => {
    setLocalStorage('store', store.getState(toolkitReducer))
    setLocalStorage('user', store.getState(userSlice))
})