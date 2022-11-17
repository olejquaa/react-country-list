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
                            <div className='row align-items-center text-start'>
                                <span className='col col-lg-1'>
                                    <img src={flags} className="img-fluid" alt={name} />
                                </span>
                                <span className='col col-lg'>{name}</span>
                                <span className='col col-lg'>{capital}</span>
                                <span className='col col-lg'>{region}</span>
                                <span className='col col-lg'>
                                    <Badge title='area' count={area} color={Color.Warning} />
                                </span>
                                <span className='col col-lg'>
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
