export interface IUser {
    _id: string,
    email: string,
    pass: string,
    accessToken?: string,
    avatar?: string;
    firstName?: string; 
    lastName?: string; 
}