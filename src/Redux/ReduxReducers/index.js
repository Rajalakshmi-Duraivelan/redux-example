import { combineReducers } from "redux";
import inventoryReducer from "./InventoryReducer";
import userListReducer from "./UserReducers";

const reducers = combineReducers(
    {
        inventory : inventoryReducer,
        userList : userListReducer,
    }
)

export default reducers;