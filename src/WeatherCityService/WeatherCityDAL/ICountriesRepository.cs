using System.Collections.Generic;

namespace WeatherCityDAL
{
    public interface ICountriesRepository
    {
        IEnumerable<CountryModel> GetAllCountries();
    }
}
