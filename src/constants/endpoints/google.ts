export const getAddresses = (query:string) => `google/addresses?query=${query}`;
export const getAddressDetails = (placeId:string) => `google/address/details?placeId=${placeId}`;