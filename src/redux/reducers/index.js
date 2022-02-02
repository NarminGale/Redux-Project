import {combineReducers} from "redux"
import {productReducer} from "./productReducer"

const reducers = combineReducers({
    productStore: productReducer,
})

export default  reducers