using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WeatherCityDAL.Models
{
    public class CountryModel
    {
      [Key]
      public string Code { get; set; }
      public string Name { get; set; }
    }
}
