using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WeatherCityDAL;
using WeatherCityDAL.Data;
using Microsoft.EntityFrameworkCore;

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

      //services.AddSingleton<ICitiesRepository, CitiesCosmosDbRepository>();
      services.AddTransient<ICitiesRepository, CitiesSqlRepository>();
      services.AddSingleton<ICountriesRepository, CountriesCosmosDbRepository>();
      
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
