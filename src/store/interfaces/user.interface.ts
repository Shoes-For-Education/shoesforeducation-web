import { EGender } from "../enums/gender.enum";

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
    },
    gender?: EGender,
    age?: number,
    shoeSize?:string,
}