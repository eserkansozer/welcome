using Microsoft.EntityFrameworkCore;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {    }

    public DbSet<CityModel> Cities { get; set; }
  }
}
