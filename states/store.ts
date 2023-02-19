import { combineReducers, configureStore, Action, AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import postReducer from "./slices/post"

let store

const combinedReducer = combineReducers({
  post: postReducer
})

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () => {
  store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
    devTools: process.env.NODE_ENV !== "production"
  })
  return store
}

export { store }

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store["dispatch"]
export type RootState = ReturnType<Store["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper(makeStore)
