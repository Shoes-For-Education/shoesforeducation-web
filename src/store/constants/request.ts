export enum IRequestStatus {
    CREATED = 201,
    SUCCESS = 200,
    SERVER_ERROR = 500,
    BAD_REQUEST = 400
}

export interface IRequestResponse<T> {
    statusCode: IRequestStatus,
    data: T,
    message?: string
}