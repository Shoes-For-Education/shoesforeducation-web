export enum RequestShoesFormSteps {
    BOOK = "Book",
    PERSONAL = "Personal",
    SHIPPING = "Shipping",
}

export const requestShoesFormStepsMap : { [ key in RequestShoesFormSteps ] : string } = {
    [ RequestShoesFormSteps.BOOK ]: "Book",
    [ RequestShoesFormSteps.PERSONAL ]: "Personal",
    [ RequestShoesFormSteps.SHIPPING ]: "Shipping",
}