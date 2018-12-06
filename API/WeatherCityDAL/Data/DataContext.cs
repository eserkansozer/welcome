using Microsoft.EntityFrameworkCore;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {    }

       public DbSet<CountryModel> WeatherCountries { get; set; }
       public DbSet<CityModel> WeatherCities { get; set; }
    }
}
