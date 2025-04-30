import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { getAddresses  } from "../constants/endpoints/google";

export interface IAddressPredication {
    description: string;
    place_id: string;
    terms: {
        offset: number;
        value: string;
    }
}

export const useAddresses = ({ query } : { query:string }) => {
    const [ addresses, setAddresses ] = useState<IAddressPredication[]>([]);

    const fetchAddresses = useCallback(async () => {
        if (!query) return; 

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