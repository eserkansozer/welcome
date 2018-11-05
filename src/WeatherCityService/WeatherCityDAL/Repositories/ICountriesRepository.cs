using System.Collections.Generic;

namespace WeatherCityDAL
{
    public interface ICountriesRepository
    {
        IEnumerable<Models.CountryModel> GetAllCountries();
    }
}
