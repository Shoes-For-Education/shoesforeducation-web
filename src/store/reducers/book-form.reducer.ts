import { EBookFormActions } from "../constants/book-form";
import { IAction } from "../interfaces/action.interface";

export interface IBookFormReducer {
    isCreated: boolean,
    isError: boolean,
}

const initialState:IBookFormReducer = {
    isCreated: false,
    isError: false,
};

const bookFormReducer = (state:IBookFormReducer = initialState, action:IAction) => {
    switch(action.type) {
        case EBookFormActions.SET_CREATED_BOOK_FORM: {
            return { ...state, isCreated: action.payload };
        }
        case EBookFormActions.SET_FAILED_CREATING_BOOK_FORM: {
            return { ...state, isError: action.payload };
        }
        default: {
            return state;  
        }
    }
};

export default bookFormReducer; 