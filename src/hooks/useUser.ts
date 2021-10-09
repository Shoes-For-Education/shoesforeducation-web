import { useCallback, useEffect, useState } from "react";
import { getUserEndpoint } from "../constants/endpoints/user";
import * as api from "../utils/api";
import { logOutUser } from "../utils/user";
import store from "../store";
import { setUser } from "../store/actions/user.actions";

export const useUser = ({ _id } : { _id: string }) => {
    const [ user, setUpdatedUser ] = useState({});

    const getUser = useCallback(async () => {
        if (!_id) {
            logOutUser();
            return; 
        }
        const response = await api.get(getUserEndpoint(_id)).catch(e => {
            console.error(e);
            logOutUser();
        });

        const data = response?.data; 
        if (!data) {
            logOutUser();
            return; 
        };

        store.dispatch(setUser(data));
        const accessToken = store.getState().auth.user.accessToken; 
        localStorage.setItem("user", JSON.stringify({ ...data, accessToken }));

        setUpdatedUser(data);
    }, [_id]);

    useEffect(() => {
        getUser();
    }, [ getUser ]);

    return { user };
}