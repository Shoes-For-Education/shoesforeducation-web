import { useCallback, useEffect, useState } from "react";
import * as api from "../utils/api";
import { getAddressDetails } from "../constants/endpoints/google";

export interface IAddressDetails {
    addressComponents: {
        long_name: string;
        short_name: string;
        types: string[];
    }[];
    formattedAddress: string;
}

export interface IParsedAddress {
    city?: string;
    zipCode?: string;
    country?: string;
    state?: string;
    addressLineOne?: string;
    absolute: string;
}

export const useAddressDetails = ({ placeId }: { placeId?: string }) : IParsedAddress | undefined => {
    const [parsedAddress, setParsedAddress] = useState<IParsedAddress>();

    const fetchAddressDetails = useCallback(async () => {
        if (!placeId) return;

        const response = await api.get(getAddressDetails(placeId)).catch((e) => {
            console.error(e);
        });

        const data: IAddressDetails | undefined = response?.data;
        if (!data) {
            return;
        }

        const components = data.addressComponents;

        const getComponent = (types: string[]) => {
            const comp = components.find((c) => types.every((t) => c.types.includes(t)));
            return comp?.long_name;
        };

        const addressLineOne = getComponent(["street_number"])
            ? `${getComponent(["street_number"])} ${getComponent(["route"])}`
            : getComponent(["route"]);

        setParsedAddress({
            city: getComponent(["locality"]) || getComponent(["sublocality"]) || getComponent(["postal_town"]),
            zipCode: getComponent(["postal_code"]),
            country: getComponent(["country"]),
            state: getComponent(["administrative_area_level_1"]),
            addressLineOne,
            absolute: data.formattedAddress || "",
        });
    }, [placeId]);

    useEffect(() => {
        fetchAddressDetails();
    }, [fetchAddressDetails]);

    return parsedAddress;
};
