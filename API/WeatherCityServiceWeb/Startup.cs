using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WeatherCityDAL.Data;
using Microsoft.EntityFrameworkCore;
using WeatherCityDAL.Repositories;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;

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
            services.AddSingleton<ICitiesRepository, CitiesSqlRepository>();

            //services.Configure<MyConfigurationSectionClass>(Configuration.GetSection("MyCustomSection")); 
            //This is how to define a custom section and map to your object

            services.AddCors();
            services.AddMvc();

            services.AddTransient<Seed>();
        }

        // This method gets called by the runtime. Use this method to  configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, Seed seeder)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(builder =>
                {
                    builder.Run(context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.Headers.Add("Application-Error", error.Error.Message);
                            context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                        }

                        return null;
                    });
                });
            }

            seeder.SeedCountries();
            seeder.SeedCities();

            app.UseCors(builder => builder.WithOrigins("http://localhost:4200", "http://welcomehome.azurewebsites.net/"));

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
