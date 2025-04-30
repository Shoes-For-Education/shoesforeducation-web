import { useCallback, useEffect, useState } from "react";
import { getBookFormVideoURLEndpoint } from "../constants/endpoints/book-form";
import * as api from "../utils/api";

interface IBookFormsPayload {
    key: string,
    userId: string,
    active: boolean
}

export const useBookFormVideoURL = ({ key, userId, active } : IBookFormsPayload ) => {
    const [ url, setURL ] = useState<string | null>(null);

    const getBookFormVideoURL = useCallback(async () => {
        if (!key || !userId || !active) return; 

        const { data: { url = null } = {} } = await api.get(getBookFormVideoURLEndpoint(key, userId));
        if (url) setURL(url);
    }, [ key, userId, active ]);

    useEffect(() => {
        getBookFormVideoURL();
    }, [ getBookFormVideoURL ]);

    return { url };
}