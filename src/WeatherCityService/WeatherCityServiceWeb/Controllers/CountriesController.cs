using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using WeatherCityDAL;
using WeatherCityDAL.Repositories;
using System.Threading.Tasks;

namespace WeatherCityService.Controllers
{
  [Produces("application/json")]
  [Route("api/Countries")]
  public class CountriesController : Controller
  {
    private readonly ICountriesRepository _countriesRepository;

    public CountriesController(ICountriesRepository countriesRepository)
    {
      _countriesRepository = countriesRepository;
    }

    // GET: api/Countries
    [HttpGet]
    public async Task<IEnumerable<WeatherCityDAL.Models.CountryModel>> Get()
    {
      var countryList = await _countriesRepository.GetAllCountriesAsync();

      return countryList;
    }   
  }
}