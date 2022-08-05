import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setLocalStorage } from "@utils/localStorage";

import signedUsersSlice from './slices/signedUsersSlice'
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";
import favouriitesSlice from "./slices/favouriitesSlice";
import historySlice from "./slices/historySlice";
import userInfoSlice from "./slices/userInfoSlice";
import { checkLoginMiddlware } from './middleware/customMiddleware'

import { playersApi } from "./playersApi";

const rootReducer = combineReducers({
    [playersApi.reducerPath]: playersApi.reducer,
    favourites: favouriitesSlice,
    history: historySlice,
    users: signedUsersSlice,
    user: userSlice,
    isLogin: loginSlice,
    userInfo: userInfoSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([playersApi.middleware, checkLoginMiddlware]),
})

store.subscribe(() => {
    // setLocalStorage('favourites', store.getState(userSlice).favourites)
    setLocalStorage('favourites', store.getState(favouriitesSlice).favourites)
    setLocalStorage('history', store.getState(historySlice).history)
    setLocalStorage('user', store.getState(userSlice).user)
    setLocalStorage('users', store.getState(signedUsersSlice).users)
    // console.log(store.getState(historySlice).history);
    setLocalStorage('isLogin', store.getState(loginSlice).isLogin)
    setLocalStorage('userInfo', store.getState(userInfoSlice).userInfo)
})