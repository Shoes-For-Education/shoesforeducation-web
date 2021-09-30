export enum EPaymentActions {
    DONATE = "DONATE",
}

export interface IDonateAction {
    type: EPaymentActions.DONATE,
    payload: {
        token: any,
    }
}