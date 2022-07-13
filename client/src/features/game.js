import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: "game",
    initialState: { value: {"test": 1}},
    reducers: {
        setGame: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setGame } = gameSlice.actions

export default gameSlice.reducer