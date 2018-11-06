using System.Collections.Generic;

namespace WeatherCityDAL.Repositories
{
    public interface ICountriesRepository
    {
        IEnumerable<Models.CountryModel> GetAllCountries();
    }
}
