using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WeatherCityDAL.Data;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Repositories
{
    public class CitiesSqlRepository : ICitiesRepository
    {
        public DataContext _dataContext { get; }

        public CitiesSqlRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<CityModel> GetCitiesByCountry(string countryCode)
        {
            return _dataContext.WeatherCities.Where(wc => wc.country == countryCode).ToList();
        }
    }
}
