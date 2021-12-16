import { EGender } from "../enums/gender.enum";
import { EProofType } from "../enums/proof-type.enum";

export interface IBookRequestForm {
    userId: string,
    firstName: string,
    lastName: string,
    gender: EGender,
    age?:number,
    email: string,
    address: {
        absolute: string,
    },
    summary?: string,
    proofType: EProofType,
    shoeSize: string,
    bookId: string,
}