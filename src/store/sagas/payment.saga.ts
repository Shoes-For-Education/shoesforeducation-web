import { all, put, takeLatest } from "@redux-saga/core/effects";
import { EPaymentActions, IDonateAction } from "../constants/payment";
import * as api from "../../utils/api";
import { DONATE } from "../../constants/endpoints/payment";
import { setSnackbarEvent } from "../actions/user.actions";

function* donate({ payload } : IDonateAction) : Generator<any> {
    try {
        const response:any = yield api.post(DONATE, payload);
        if (response?.statusCode === 200) {
            yield put(setSnackbarEvent({ content: "Payment Successful", variant: "success" }));
        } else throw new Error("Payment Failed");
    } catch (e) {
        yield put(setSnackbarEvent({ content: "Payment Failed", variant: "error"}));
    }
}

export default function* paymentSaga() {
    yield all([
        takeLatest(EPaymentActions.DONATE, donate)
    ])
}