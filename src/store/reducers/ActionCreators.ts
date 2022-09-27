import { AppDispatch } from "../store";
import axios from 'axios'
import { IUser } from "../../models/IUser";
import { userReducer } from "./UserReducer"; 
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userReducer.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jonplaceholder.typicode.com/users')
//         dispatch(userReducer.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         let errorMessage = "Failed to do something exceptional";
//         if (e instanceof Error) 
//         dispatch(userReducer.actions.usersFetchingError(errorMessage))
//     }
// }


export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jonplaceholder.typicode.com/users')
            return response.data
            } catch (e) {
            return thunkAPI.rejectWithValue('Не удались загрузить')
        }
    }
)
