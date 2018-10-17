using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace WeatherCityService.Controllers
{
    [Produces("application/json")]
    [Route("api/Cities")]
    public class CitiesController : Controller
    {
        // GET: api/Cities
        [HttpGet]
        public JArray Get()
        {
            var json = System.IO.File.ReadAllText("Data/city-list.json");
            var list = JArray.Parse(json);
            return list;
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
