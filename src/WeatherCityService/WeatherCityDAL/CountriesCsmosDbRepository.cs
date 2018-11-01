using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;

namespace WeatherCityDAL
{
    public class CountriesCsmosDbRepository : ICountriesRepository
    {
        private readonly string _databaseId;
        private static DocumentClient _client;
        private readonly IConfiguration _config;

        public CountriesCsmosDbRepository(IConfiguration config)
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

        public IEnumerable<Models.CountryModel> GetAllCountries()
        {
            var query = $"SELECT * FROM c";

            var result = _client.CreateDocumentQuery<Models.CountryModel>(UriFactory.CreateDocumentCollectionUri(_databaseId, "country_codes"), query).ToList();

            return result;
        }
    }
}
