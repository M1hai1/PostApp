import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { postAPI } from "../server/PostService";
import userReducer from './reducers/UserReducer'


// Здесь совмещаем редюсеры, которые у нас будут
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})


// Вместо createStore создаем след функцию,
// куда передаем также редюсер и middlewre
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware)
        
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']