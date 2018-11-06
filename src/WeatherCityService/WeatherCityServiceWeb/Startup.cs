using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WeatherCityDAL.Data;
using Microsoft.EntityFrameworkCore;
using WeatherCityDAL.Repositories;

namespace WeatherCityService
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<DataContext>(
      options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnectionString"),
      builder => builder.MigrationsAssembly("WeatherCityServiceWeb"))
      );

      services.AddTransient<ICountriesRepository, CountriesSqlRepository>();
      services.AddSingleton<ICitiesRepository, CitiesCosmosDbRepository>();

      services.AddCors();
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to  configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors(builder => builder.WithOrigins("http://localhost:4200", "http://welcomehome.azurewebsites.net/"));

      app.UseMvc();
    }
  }
}
