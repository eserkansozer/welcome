using System;
using System.Collections.Generic;
using System.Text;

namespace WeatherCityDAL.Repositories
{
    public interface ICitiesRepository
    {
        IEnumerable<Models.CityModel> GetCitiesByCountry(string countryCode);
    }
}
