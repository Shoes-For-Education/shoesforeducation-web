import { ECurrency } from "../store/enums/currency.enum";
import { EGender } from "../store/enums/gender.enum";

export const genderMap : { [ key in EGender ]: string } = {
    [ EGender.FEMALE ]: "Female",
    [ EGender.MALE ]: "Male",
    [ EGender.NON_BINARY ]: "Non Binary",
}

export const currencySymbolMap : { [ key in string ]: string } = {
    [ ECurrency.USD ]: "$",
    [ ECurrency.INR ]: "₹",
}