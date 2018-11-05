using System;
using System.Collections.Generic;
using System.Linq;
using WeatherCityDAL.Data;
using WeatherCityDAL.Models;

namespace WeatherCityDAL
{
    public class CitiesSqlRepository : ICitiesRepository
    {
        public DataContext _dataContext { get; }

        public CitiesSqlRepository(DataContext dataContext)
        {
            this._dataContext = dataContext;

        }
        public IEnumerable<CityModel> GetCitiesByCountry(string countryCode)
        {
          return _dataContext.WeatherCity.Where(c => c.country == countryCode).ToList();  
        }
    }
}
