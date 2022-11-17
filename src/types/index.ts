export enum Color {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Info = "info",
    Warning = "warning",
    Danger = "danger",
    Light = "light",
    Dark = "dark",
}

export interface ICountryAPI {
    flags: ICountryFlag,
    name: ICountryName,
    capital: string[],
    region: string,
    area: number,
    population: number,
}

export interface ICountryFlag {
    png?: string,
    svg: string,
}

export interface ICountryName {
    common: string,
    official?: string,
    nativeName?: ICountryNativeName,
}

export interface ICountryNativeName {
    spa?: ICountrySpa,
}

export interface ICountrySpa {
    official?: string,
    common?: string,
}

export interface ICountry {
    flags: string,
    name: string,
    capital: string,
    region: string,
    area: number,
    population: number,
}


export type BadgeLabel = {
    title: 'area' | 'population',
    count: number,
    color: Color,
}

