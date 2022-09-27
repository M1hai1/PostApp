import {IUser} from '../../models/IUser'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators';



// Здесь дефолтному состоянию задаю типы
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number
}
// interface TodosState {
//     todos: ITodo[];
//     isLoading: boolean;
//     error: string;
// }


// Здесь дефолтное состояние редюсера
const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

// const initialState: TodosState = {
//     todos: [],
//     isLoading: false,
//     error: ''
// }


// сам редюсер, или слайс
export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
        extraReducers: {
            [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            },
            [fetchUsers.pending.type]: (state) => {
                state.isLoading = true

            },
            [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        }
    
    }
)

export default userReducer.reducer