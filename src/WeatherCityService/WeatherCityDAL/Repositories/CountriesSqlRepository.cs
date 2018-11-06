using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WeatherCityDAL.Data;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Repositories
{
  public class CountriesSqlRepository : ICountriesRepository
  {
    public DataContext _dataContext { get; }

    public CountriesSqlRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public IEnumerable<CountryModel> GetAllCountries()
    {
      return _dataContext.WeatherCountry.OrderBy(c => c.Name).ToList();
    }
  }
}
