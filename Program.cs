using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using TripStyle.Models;

namespace TripStyle
{
    public class Program
    {
        public static void Main(string[] args)
        {


            // using (var db = new TripStyleContext())
            // {

            //     var product = new Product
            //     {
            //         Name = "Backpack",
            //         Make = "Douchebags"
            //     };

            //     db.Products.Add(product);
            //     db.SaveChanges();

            // }
            CreateWebHostBuilder(args).Build().Run();


        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
