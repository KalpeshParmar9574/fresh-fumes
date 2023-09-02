import { isEqual } from "lodash";
export const generateObject = (address) => {
    const present = {
        area: address.presentArea,
        city: address.presentCity,
        country: address.presentCountry,
        state: address.presentState,
        streetLine1: address.presentStreetLine1,
        streetLine2: address.presentStreetLine2,
        zipCode: address.presentZipCode,
    };
    const permenent = {
        area: address.permenentArea,
        city: address.permenentCity,
        country: address.permenentCountry,
        state: address.permenentState,
        streetLine1: address.permenentStreetLine1,
        streetLine2: address.permenentStreetLine2,
        zipCode: address.permenentZipCode,
    };
    return isEqual(present, permenent);
};
