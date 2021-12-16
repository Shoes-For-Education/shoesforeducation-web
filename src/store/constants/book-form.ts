import { IBookRequestForm } from "../interfaces/book-request-form.interface";

export enum EBookFormActions {
    SET_CREATE_BOOK_FORM = "SET_CREATE_BOOK_FORM",
    SET_CREATED_BOOK_FORM = "SET_CREATED_BOOK_FORM",
    SET_FAILED_CREATING_BOOK_FORM = "SET_FAILED_CREATING_BOOK_FORM",
}

export interface ISetCreateBookForm {
    type: EBookFormActions.SET_CREATE_BOOK_FORM,
    payload: FormData,
}

export interface ISetCreatedBookForm {
    type: EBookFormActions.SET_CREATED_BOOK_FORM,
    payload: boolean,
}

export interface ISetFailedCreatingBookForm {
    type: EBookFormActions.SET_FAILED_CREATING_BOOK_FORM,
    payload: boolean,
}