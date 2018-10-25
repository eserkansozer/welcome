using System;
using System.Collections.Generic;
using System.Text;

namespace WeatherCityDAL
{
    public interface ICitiesRepository
    {
        IEnumerable<CityDataObject> GetAllCities();
    }
}
