import { all, put, takeLatest } from "@redux-saga/core/effects";
import { EBookFormActions, ISetCreateBookForm } from "../constants/book-form";
import * as api from "../../utils/api";
import { CREATE_BOOK_FORM } from "../../constants/endpoints/book-form";
import { setSnackbarEvent } from "../actions/user.actions";
import { setCreatedBookForm, setFailedCreatingBookForm } from "../actions/book-form.actions";

function* createBookForm({ payload }: ISetCreateBookForm) : Generator<any> {
    try {
        yield api.post(CREATE_BOOK_FORM, payload);
        yield put(setCreatedBookForm(true));
        yield put(setSnackbarEvent({ 
            content: "Submitted Shoes Request", 
            variant: "success" 
        }))
    } catch {
        yield put(setSnackbarEvent({ 
            content: "Error Creating Shoes Request", 
            variant: "error" 
        }))
        yield put(setFailedCreatingBookForm(true));
    }
}

const bookFormSaga = function* () {
    yield all([
        takeLatest(EBookFormActions.SET_CREATE_BOOK_FORM, createBookForm),
    ])
}

export default bookFormSaga;