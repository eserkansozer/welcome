using System;
using System.Collections.Generic;
using System.Text;

namespace WeatherCityDAL
{
    public interface ICitiesRepository
    {
        IEnumerable<Models.CityModel> GetCitiesByCountry(string countryCode);
    }
}
