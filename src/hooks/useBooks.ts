import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { BOOKS } from "../constants/endpoints/books";

export const useBooksCatagories = () => {
    const [ booksCatagories, setBooksCatagories ] = useState([]);

    const getBooksCatagories = useCallback(async () => {
        const response = await api.get(BOOKS).catch(e => {
            console.error(e);
        });

        const data = response?.data; 
        if (!data) {
            return; 
        }

        setBooksCatagories(data);
    }, []);

    useEffect(() => {
        getBooksCatagories();
    }, [ getBooksCatagories ]);

    return { booksCatagories };
}