import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setLocalStorage } from "@utils/localStorage";

import signedUsersSlice from './slices/signedUsersSlice'
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";
import favouriitesSlice from "./slices/favouriitesSlice";
import userInfoSlice from "./slices/userInfoSlice";

const rootReducer = combineReducers(
    {
        favourites: favouriitesSlice,
        users: signedUsersSlice,
        user: userSlice,
        isLogin: loginSlice,
        userInfo: userInfoSlice
    })

export const store = configureStore({
    reducer: rootReducer
})

store.subscribe(() => {
    // setLocalStorage('favourites', store.getState(userSlice).favourites)
    setLocalStorage('favourites', store.getState(favouriitesSlice).favourites)
    setLocalStorage('user', store.getState(userSlice).user)
    setLocalStorage('users', store.getState(signedUsersSlice).users)
    // console.log(store.getState(userSlice).users);
    setLocalStorage('isLogin', store.getState(loginSlice).isLogin)
    setLocalStorage('userInfo', store.getState(userInfoSlice).userInfo)
})