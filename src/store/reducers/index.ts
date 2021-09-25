import { connectRouter } from "connected-react-router";
import { Reducer } from "redux";
import { combineReducers } from "redux";
import auth, { IAuthReducer } from "./auth.reducer";
import user, { IUserReducer } from "./user.reducer";

export interface IRootReducer {
    auth: IAuthReducer,
    user: IUserReducer,
}

const reducers = (history:any) : Reducer<any> => combineReducers({
    auth,
    user,
    router: connectRouter(history),
})

export default reducers; 