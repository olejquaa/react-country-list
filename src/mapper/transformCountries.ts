import { ICountryAPI, ICountry } from "../types"


export const transformCountries = (country: ICountryAPI[]): ICountry[] => {
    return country.map(({ flags, name, capital, region, area, population }) => {
        return {
            flags: flags.svg,
            name: name.common,
            capital: capital[0],
            region: region,
            area: area,
            population: population,
        }
    });
}


