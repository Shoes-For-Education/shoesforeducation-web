import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { BOOK_CATAGORIES } from "../constants/endpoints/books";

export const useBooksCatagories = () => {
    const [ booksCatagories, setBooksCatagories ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getBooksCatagories = useCallback(async () => {
        setLoading(true);

        const response = await api.get(BOOK_CATAGORIES).catch(e => {
            console.error(e);
        });

        setLoading(false);

        const data = response?.data; 
        if (!data) {
            return; 
        }

        setBooksCatagories(data);
    }, []);

    useEffect(() => {
        getBooksCatagories();
    }, [ getBooksCatagories ]);

    return { booksCatagories, loading };
}