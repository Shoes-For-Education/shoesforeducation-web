import type { IBookRequestForm } from "./book-request-form.interface";
import type { IUser } from "./user.interface";

export interface IAggregatedBookForm extends IBookRequestForm {
    user: IUser,
    book: any,
    _id: string,
}