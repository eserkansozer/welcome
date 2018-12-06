﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WeatherCityDAL.Data;

namespace WeatherCityServiceWeb.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20181206222839_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WeatherCityDAL.Models.CityModel", b =>
                {
                    b.Property<int>("id");

                    b.Property<string>("country");

                    b.Property<string>("name");

                    b.HasKey("id");

                    b.ToTable("WeatherCities");
                });

            modelBuilder.Entity("WeatherCityDAL.Models.CountryModel", b =>
                {
                    b.Property<string>("Code")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Code");

                    b.ToTable("WeatherCountries");
                });
#pragma warning restore 612, 618
        }
    }
}