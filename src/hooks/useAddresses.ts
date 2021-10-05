import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { getAddresses  } from "../constants/endpoints/google";

export const useAddresses = ({ query } : { query:string }) => {
    const [ addresses, setAddresses ] = useState<any[]>([]);

    const fetchAddresses = useCallback(async () => {
        const response = await api.get(getAddresses(query)).catch(e => {
            console.error(e);
        });

        const data = response?.data; 
        if (!data) {
            return; 
        }

        setAddresses(data);
    }, [ query ]);

    useEffect(() => {
        fetchAddresses();
    }, [ fetchAddresses ]);

    return { addresses };
}