export enum RequestShoesFormSteps {
    BOOK = "Book",
    PERSONAL = "Personal",
    NOMINATION = "Nomination",
    SHIPPING = "Shipping",
}

export const requestShoesFormStepsMap : { [ key in RequestShoesFormSteps ] : string } = {
    [ RequestShoesFormSteps.BOOK ]: "Book",
    [ RequestShoesFormSteps.PERSONAL ]: "Personal",
    [ RequestShoesFormSteps.NOMINATION ]: "Nomination",
    [ RequestShoesFormSteps.SHIPPING ]: "Shipping",
}