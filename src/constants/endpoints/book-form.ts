export const CREATE_BOOK_FORM = "book-form/create";
export const getUserBookFormsEndpoint = (page:number, rows:number) => (
    `book-form/user/?page=${page}&rows=${rows}`
);
export const getBookFormVideoURLEndpoint = (key:string, userId:string) : string => (
    `book-form/video-url?key=${key}&userId=${userId}`
)