import { EPaymentActions, IDonateAction } from "../constants/payment";

export const donateAction = (payload:any) : IDonateAction => ({
    type: EPaymentActions.DONATE,
    payload,
})