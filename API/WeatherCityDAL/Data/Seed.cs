using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using WeatherCityDAL.Models;

namespace WeatherCityDAL.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedCities()
        {
            //_context.WeatherCities.RemoveRange(_context.WeatherCities);
            var cityData = System.IO.File.ReadAllText("../WeatherCityDAL/Data/city.list.json");
            var cities = JsonConvert.DeserializeObject<List<CityModel>>(cityData);
            foreach (var city in cities)
            {
                _context.WeatherCities.Add(city);
            }            

            _context.SaveChanges();
        }

        public void SeedCountries()
        {
            //_context.WeatherCountries.RemoveRange(_context.WeatherCountries);
            var countryData = System.IO.File.ReadAllText("../WeatherCityDAL/Data/country.codes.json");
            var countries = JsonConvert.DeserializeObject<List<CountryModel>>(countryData);
            foreach (var country in countries)
            {
                _context.WeatherCountries.Add(country);
            }

            _context.SaveChanges();
        }
    }
}
