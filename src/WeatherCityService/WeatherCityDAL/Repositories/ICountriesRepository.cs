using System.Collections.Generic;
using System.Threading.Tasks;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Repositories
{
    public interface ICountriesRepository
    {
        IEnumerable<CountryModel> GetAllCountries();
        Task<IEnumerable<CountryModel>> GetAllCountriesAsync();
    }
}
