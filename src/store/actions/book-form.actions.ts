import { 
    EBookFormActions, 
    type ISetCreateBookForm, 
    type ISetCreatedBookForm, 
    type ISetFailedCreatingBookForm 
} from "../constants/book-form";

export const setCreateBookForm = (payload:FormData) : ISetCreateBookForm => ({
    type: EBookFormActions.SET_CREATE_BOOK_FORM,
    payload, 
});

export const setCreatedBookForm = (payload:boolean) : ISetCreatedBookForm => ({
    type: EBookFormActions.SET_CREATED_BOOK_FORM,
    payload, 
});

export const setFailedCreatingBookForm = (payload:boolean) : ISetFailedCreatingBookForm => ({
    type: EBookFormActions.SET_FAILED_CREATING_BOOK_FORM,
    payload, 
});