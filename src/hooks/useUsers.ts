import { useCallback, useEffect, useState } from 'react';
import { GET_USERS } from '../constants/endpoints/auth';
import * as api from "../utils/api";

export const useUsers = () => {
    const [ users, setUsers ] = useState([]);

    const getUsers = useCallback(async () => {
        const res = await api.get(GET_USERS);
        console.log(res);
    }, []);

    useEffect(() => {
        getUsers();
    }, [ getUsers ]);

    return { users };
}