import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";
import { setLocalStorage } from "@utils/localStorage";

const rootReducer = combineReducers({
    toolkit: toolkitReducer
})

export const store = configureStore({
    reducer: rootReducer
})

store.subscribe(() => {
    setLocalStorage('store', store.getState(toolkitReducer))
    // console.log(store.getState(toolkitReducer));
})