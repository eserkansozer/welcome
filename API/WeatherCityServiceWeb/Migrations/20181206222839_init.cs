using Microsoft.EntityFrameworkCore.Migrations;

namespace WeatherCityServiceWeb.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WeatherCities",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    name = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeatherCities", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "WeatherCountries",
                columns: table => new
                {
                    Code = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeatherCountries", x => x.Code);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WeatherCities");

            migrationBuilder.DropTable(
                name: "WeatherCountries");
        }
    }
}
