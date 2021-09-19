import { all, takeLatest } from "@redux-saga/core/effects";
import { EAuthActions } from "../constants/auth";

function* loginClient() {

}

const saga = function*() {
    yield all([
        takeLatest(EAuthActions.LOGIN_CLIENT, loginClient)
    ])
}

export default saga; 