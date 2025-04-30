import type { EGender } from "../enums/gender.enum";

export interface IUser {
    _id: string,
    email: string,
    pass: string,
    accessToken?: string,
    avatar?: string;
    firstName?: string; 
    lastName?: string; 
    address?: {
        absolute?: string,
        addressLine1?: string,
        addressLine2?: string,
        city?: string,
        state?: string,
        country?: string,
        zipCode?: string,
        placeId?: string,
    },
    gender?: EGender,
    age?: number,
    shoeSize?:string,
}