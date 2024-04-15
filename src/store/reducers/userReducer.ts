import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface IUser {
    token: string
}

const initialState: IUser = {
    token: ""
};




export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        removeToken(state) {
            state.token = "";
        }
    },
});

export default userSlice.reducer;
export const { setToken, removeToken } = userSlice.actions;