import { EGender } from "../store/enums/gender.enum";

export const genderMap : { [ key in EGender ]: string } = {
    [ EGender.FEMALE ]: "Female",
    [ EGender.MALE ]: "Male",
    [ EGender.NON_BINARY ]: "Non Binary",
}