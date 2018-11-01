using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using WeatherCityDAL;
using System.Linq;

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
    [HttpGet]
    public ActionResult Get([FromQuery]string countryCode)
    {
      var cityList = _citiesRepository.GetCitiesByCountry(countryCode);

      if(cityList == null || cityList.ToList().Count == 0)
      {
        return NotFound();
      }

      return Ok(cityList);
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
