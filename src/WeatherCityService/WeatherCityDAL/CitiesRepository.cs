using System;
using System.Collections.Generic;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace WeatherCityDAL
{
  public class CitiesRepository : ICitiesRepository
  {
    private readonly string _databaseId;
    private static DocumentClient _client;
    private readonly IConfiguration _config;

    public CitiesRepository(IConfiguration config)
    {
      _config = config;

      _databaseId = _config.GetValue<string>("CosmosSettings:database");

      _client = new DocumentClient(
        new Uri(_config.GetValue<string>("CosmosSettings:endpoint")),
        _config.GetValue<string>("CosmosSettings:authKey"),
        new ConnectionPolicy
        {
          ConnectionMode = ConnectionMode.Direct,
          ConnectionProtocol = Protocol.Tcp
        });
    }

    public IEnumerable<Models.CityModel> GetCitiesByCountry(string countryCode)
    {
      var query = $"SELECT * FROM c WHERE c.country =\"{countryCode}\"";

      var result = _client.CreateDocumentQuery<Models.CityModel>(UriFactory.CreateDocumentCollectionUri(_databaseId, "cities"), query).ToList();

      return result;
    }
  }
}
