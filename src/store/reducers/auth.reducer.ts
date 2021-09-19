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
        default:
            return state; 
    }
}

export default authReducer; 