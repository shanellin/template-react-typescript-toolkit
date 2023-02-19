import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TInitialState = {
  clickTimes: number
}

export const initialState: TInitialState = {
  clickTimes: 0
}

const mainReducer = createSlice({
  name: "mainReducer",
  initialState: initialState,
  reducers: {
    resetAll() {
      return initialState
    },
    changeNumber(state, action: PayloadAction<{ type: string }>) {
      if (action.payload.type === "increment") {
        state.clickTimes++
      } else {
        state.clickTimes--
      }
    }
  }
})

export const { resetAll, changeNumber } = mainReducer.actions

export default mainReducer.reducer
