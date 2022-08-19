import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
    name: "admin",
    initialState: { value: { username: "", is_owner: false}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { login } = adminSlice.actions

export default adminSlice.reducer