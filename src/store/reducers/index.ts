import { connectRouter } from "connected-react-router";
import { Reducer } from "redux";
import { combineReducers } from "redux";
import auth, { IAuthReducer } from "./auth.reducer";
import { IBookFormReducer } from "./book-form.reducer";
import user, { IUserReducer } from "./user.reducer";
import bookForm from "./book-form.reducer";

export interface IRootReducer {
    auth: IAuthReducer,
    user: IUserReducer,
    bookForm: IBookFormReducer,
}

const reducers = (history:any) : Reducer<any> => combineReducers({
    auth,
    user,
    bookForm,
    router: connectRouter(history),
})

export default reducers; 