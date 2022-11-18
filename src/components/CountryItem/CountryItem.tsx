import { Color, ICountry } from "../../types/index";
import { Badge } from '../Badge/Badge';

interface IProps {
    country: ICountry[];
}

export const CountryItem = ({ country }: IProps) => {
    return (
        <ul className='country-list list-group'>
            {
                country.map(({ flags, name, capital, region, area, population }) => {
                    return (
                        <li key={name} className="list-group-item list-group-item-action">
                            <div className='list-group-item--wrapper row align-items-center text-start'>
                                <span className='list-group-item--country-flag col col-lg-1'>
                                    <img src={flags} className="country-flag--image img-fluid" alt={name} />
                                </span>
                                <span className='list-group-item--country-name col col-lg'>{name}</span>
                                <span className='list-group-item--country-capital col col-lg'>{capital}</span>
                                <span className='list-group-item--country-region col col-lg'>{region}</span>
                                <span className='list-group-item--country-area col col-lg'>
                                    <Badge title='area' count={area} color={Color.Warning} />
                                </span>
                                <span className='list-group-item--country-population col col-lg'>
                                    <Badge title='population' count={population} color={Color.Success} />
                                </span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
