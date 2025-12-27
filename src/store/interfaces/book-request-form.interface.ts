import type { EGender } from "../enums/gender.enum";
import type { EOrderStatus } from "../enums/order-status.enum";
import type { EProofType } from "../enums/proof-type.enum";

export interface INominee {
    firstName: string;
    lastName: string;
    email: string;
}

export interface IBookRequestForm {
    userId: string,
    firstName: string,
    lastName: string,
    gender: EGender,
    age?:number,
    email: string,
    address: {
        absolute: string,
        placeId?: string,
        addressLine1?: string,
        addressLine2?: string,
        city?: string,
        state?: string,
        country?: string,
        zipCode?: string,
    },
    summary?: string,
    proofType: EProofType,
    shoeSize: string,
    bookId: string,
    nominees: INominee[],
    createdAt?: string,
    status?: EOrderStatus,
    aws?: {
        key: string,
    }
}