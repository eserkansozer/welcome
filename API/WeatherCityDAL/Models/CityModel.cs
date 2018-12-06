using System.ComponentModel.DataAnnotations.Schema;

namespace WeatherCityDAL.Models
{
  public class CityModel
  {
    [DatabaseGeneratedAttribute(DatabaseGeneratedOption.None)]
    public int id { get; set; }
    public string name { get; set; }
    public string country { get; set; }
  }
}
