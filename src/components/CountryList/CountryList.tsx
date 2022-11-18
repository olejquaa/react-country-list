import { ICountry } from '../../types';
import { CountryItem } from '../CountryItem/CountryItem';

interface IProps {
    country: ICountry[],
}

export const CountryList = ({ country }: IProps) => {
    return (
        <div className="country-list">
            <h1 className="country-list--title">Country List </h1>
            <CountryItem country={country} />
        </div>
    )
};
