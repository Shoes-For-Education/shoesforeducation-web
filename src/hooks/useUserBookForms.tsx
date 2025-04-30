import { useCallback, useEffect, useState } from "react";
import { getUserBookFormsEndpoint } from "../constants/endpoints/book-form";
import { IAggregatedBookForm } from "../store/interfaces/aggregated-book-form";
import * as api from "../utils/api";

interface IBookFormsPayload {
    rows: number,
    page: number,
}

interface IResponse {
    forms: IAggregatedBookForm[],
    count: number,
}

export const useUserBookForms = ({ rows, page } : IBookFormsPayload ) => {
    const [ { forms, count }, setBookFormsResponse ] = useState<IResponse>({ forms: [], count: 0 });

    const getBookForms = useCallback(async () => {
        const { data } = await api.get(getUserBookFormsEndpoint(page, rows));
        if (data) setBookFormsResponse(data);
    }, [ rows, page, ]);

    useEffect(() => {
        getBookForms();
    }, [ getBookForms ]);

    return { bookForms:forms, count };
}