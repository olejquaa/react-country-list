import 'bootstrap/dist/css/bootstrap.min.css'
import countries from './country-data.json'
import { CountryList } from './components/CountryList/CountryList';
import { transformCountries } from './mapper/transformCountries';


export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <CountryList country={transformedCountries} />
    </div>
  )
}


