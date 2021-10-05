import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { BOOKS } from "../constants/endpoints/books";

export const useBooks = () => {
    const [ books, setBooks ] = useState([]);

    const getBooks = useCallback(async () => {
        const response = await api.get(BOOKS).catch(e => {
            console.error(e);
        });

        const data = response?.data; 
        if (!data) {
            return; 
        }

        setBooks(data);
    }, []);

    useEffect(() => {
        getBooks();
    }, [ getBooks ]);

    return { books };
}