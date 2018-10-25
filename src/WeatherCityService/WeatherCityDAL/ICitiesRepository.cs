using System;
using System.Collections.Generic;
using System.Text;

namespace WeatherCityDAL
{
    public interface ICitiesRepository
    {
        IEnumerable<CityModel> GetCitiesByCountry(string countryCode);
    }
}
