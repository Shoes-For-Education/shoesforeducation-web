import { EUserActions } from "../constants/user";
import { IAction } from "../interfaces/action.interface"
import { IUser } from "../interfaces/user.interface";


export interface IUserReducer {
    user: IUser
    snackbarEvent: {
        content: string | null,
        variant: 'error' | 'info' | 'success' | 'default' | 'warning',
    }
}

const user = localStorage.getItem('user');
const userObject = user ? JSON.parse(user) : {};

const initialState:IUserReducer = {
    user: {
        _id: "",
        email: "",
        pass: "",
        accessToken: "",
        ...userObject
    },
    snackbarEvent: {
        content: null,
        variant: "default",
    },
}

let tempState; 

const userReducer = (state:IUserReducer = initialState, action:IAction) => {
    switch(action.type) {
        case EUserActions.SET_USER: 
            tempState = { ...state };
            tempState.user = action.payload; 
            return tempState; 
        case EUserActions.SET_SNACKBAR_EVENT:
            tempState = { ...state };
            tempState.snackbarEvent = action.payload; 
            return tempState; 
        default:
            return state; 
    }
}

export default userReducer; 