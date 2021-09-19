import { connectRouter } from "connected-react-router";
import { Reducer } from "redux";
import { combineReducers } from "redux";
import auth, { IAuthReducer } from "./auth.reducer";

export interface IRootReducer {
    auth: IAuthReducer,
}

const reducers = (history:any) : Reducer<any> => combineReducers({
    auth,
    router: connectRouter(history),
})

export default reducers; 