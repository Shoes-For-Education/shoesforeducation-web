import { EUserActions } from "../constants/user";
import { IAction } from "../interfaces/action.interface"
import { IUser } from "../interfaces/user.interface";

export interface IUserReducer {
    user: IUser
}

const initialState = {
    user: {
        _id: "",
        email: "",
        pass: "",
        accessToken: "",
    }
}

const userReducer = (state:IUserReducer = initialState, action:IAction) => {
    switch(action.type) {
        case EUserActions.SET_USER: 
            const tempState = { ...state };
            state.user = action.payload; 
            return tempState; 
        default:
            return state; 
    }
}

export default userReducer; 