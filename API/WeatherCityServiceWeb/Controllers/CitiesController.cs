using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using WeatherCityDAL;
using System.Linq;
using WeatherCityDAL.Repositories;
using System.ComponentModel.DataAnnotations;
using System;

namespace WeatherCityService.Controllers
{
  [Produces("application/json")]
  [Route("api/Cities")]
  [ApiController]
  public class CitiesController : ControllerBase
  {
    private readonly ICitiesRepository _citiesRepository;

    public CitiesController(ICitiesRepository citiesRepository)
    {
      _citiesRepository = citiesRepository;
    }

    //[HttpGet("{countryCode}")] for api/cities/GB
    //// GET: api/Cities/countryCode=GB
    [HttpGet]
    public ActionResult Get(string countryCode)
    {
        if (countryCode.Length != 2)
        {
            return BadRequest(new { error = "Bad input!"});
        }

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
