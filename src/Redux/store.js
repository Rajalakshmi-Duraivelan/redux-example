import { createStore } from "redux"
import reducers from "./ReduxReducers"

export const store = createStore(
    reducers,
    {},
)