import { EAuthActions } from "../constants/auth";
import { IAction } from "../interfaces/action.interface"

export interface IAuthReducer {
    user: {
        accessToken: string
    },
}

const initialState = {
    user: {
        accessToken: "",
    }
}

const authReducer = (state:IAuthReducer = initialState, action:IAction) => {
    switch(action.type) {
        case EAuthActions.SET_ACCESS_TOKEN: 
            const tempState = { ...state };
            state.user.accessToken = action.payload.accessToken; 
            return tempState; 
        default:
            return state; 
    }
}

export default authReducer; 