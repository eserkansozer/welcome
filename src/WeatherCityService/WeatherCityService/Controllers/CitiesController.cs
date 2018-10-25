using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using WeatherCityDAL;

namespace WeatherCityService.Controllers
{
  [Produces("application/json")]
  [Route("api/Cities")]
  public class CitiesController : Controller
  {
    private readonly ICitiesRepository _citiesRepository;

    public CitiesController(ICitiesRepository citiesRepository)
    {
      _citiesRepository = citiesRepository;
    }

    //// GET: api/Cities/countryCode=GB
    [HttpGet("countryCode={countryCode}", Name = "Get")]
    public IEnumerable<CityModel> Get(string countryCode)
    {
      var cityList = _citiesRepository.GetCitiesByCountry(countryCode);

      return cityList;
    }

    //// GET: api/Cities/5
    //[HttpGet("{id}", Name = "Get")]
    //public string Get(int id)
    //{
    //    return "value";
    //}

    //// POST: api/Cities
    //[HttpPost]
    //public void Post([FromBody]string value)
    //{
    //}

    //// PUT: api/Cities/5
    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody]string value)
    //{
    //}

    //// DELETE: api/ApiWithActions/5
    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
  }
}
