import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { PostApi } from "../apis"

export const getPosts = createAsyncThunk("post/getPosts", async ({ limit }: { limit: number }, { rejectWithValue }) => {
  try {
    let res = await PostApi.getPostList({ limit })
    return res
  } catch (error) {
    return rejectWithValue(error)
  }
})

interface IInitialState {
  hardcode: string
}

const initialState: IInitialState = {
  hardcode: "hardcode"
} as const

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {}
})

export const {} = postSlice.actions
export default postSlice.reducer
