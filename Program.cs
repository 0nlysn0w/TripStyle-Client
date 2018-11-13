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
using Faker;
namespace TripStyle
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateWebHostBuilder(args).Build().Run();
            using(var db = new TripStyleContext())
            {
            Random rnd = new Random();
            string[] ClothingCategories = {"shirt","coat", "skirt", "dress", "suit", "underwear", "swimsuit","shirt","coat"};
            string[] Clothingname = {"Apron","Baldric","Basque","Bathing suit","Bathrobe","blouse","body","body stocking","bodysuit","cardigan or (informal) cardie or cardy","chaps","chausses","chador","coat","coatee","codpiece","cummerbund","dolman"};
            string[] ClothingDescription = {"a protective or sometimes decorative or ceremonial garment worn over the front of the body and tied around the waist","a wide silk sash or leather belt worn over the right shoulder to the left hip for carrying a sword, etc","a short extension below the waist to the bodice of a woman's jacket, etc","a garment worn for bathing, esp an old-fashioned one that covers much of the body","a dressing gown","a woman's shirtlike garment made of cotton, nylon, etc","a woman's close-fitting one-piece garment for the torso","a one-piece undergarment for women, usually of nylon, covering the torso","a one-piece undergarment for a baby","a knitted jacket or sweater with buttons up the front","leather overalls without a seat, worn by cowboys","a tight-fitting medieval garment covering the feet and legs, usually made of chain mail","a large shawl or veil worn by Muslim or Hindu women that covers them from head to foot","an outdoor garment with sleeves, covering the body from the shoulder to waist, knee, or foot","a short coat, esp for a baby","a bag covering the male genitals, attached to hose or breeches by laces, etc, worn in the 15th and 16th centuries","a wide sash, worn with a dinner jacket"};
            //Function to create A User     // Fourth
            void CreateUser(){
            int x = 1;
            string[] Gender = {"Male","Female"};
            while (x < 100)
            {
                string Firstname = Firstname = Faker.Name.First();
                User m = new User
                {
                    UserId = x,
                    RoleId = 1,
                    Firstname = Firstname,
                    Lastname = Faker.Name.Last(),
                    Gender = Gender[new Random().Next(0,Gender.Length)],
                    Email = Faker.Internet.Email(Firstname),
                    Phonenumber = rnd.Next(600000000,699999999).ToString(),
                    Password = rnd.Next(1000,100000).ToString(),
                    // Birthday = 2004-05-23
                    BasketId = x

                };
                
                db.Users.Add(m);
                db.SaveChanges();
                x = x + 1;             
            }
            }
            //Fuction to Create All Roles      // Run once
            void CreateRole()
            {
            int y=1;
            while (y == 1)
            {
                Role r = new Role
                {
                    RoleId  =   1,
                    Name    =   "Customer",
                    Description = "The Customer is King"

                };
                Role r2 = new Role
                {
                    RoleId  =   0,
                    Name    =   "Admin",
                    Description = "The Admin is King"

                };
                db.Roles.Add(r);
                db.Roles.Add(r2);
                db.SaveChanges();
                y = y + 1;             
            }

            }
            //Function to Create A Basket   //
            void CreateBasket()
            {
            int y=1;
            while (y < 100)
            {
                Basket b = new Basket
                {
                    BasketId  =   y,
                };
                db.Baskets.Add(b);
                db.SaveChanges();
                y = y + 1;
            }
            }
            //Function to Create Categories //
            void CreateCategories()
            {
            int w=2;
            while (w < ClothingCategories.Length)
            {
                Category c = new Category
                {
                    CategoryId = w,
                    Name = ClothingCategories[w]
                };
                db.Categories.Add(c);
                db.SaveChanges();
                w = w + 1;
            }
            }
            //Function to Create Products // Fifth
            void CreateProducts()
            {
            int y=1;
            int pp = 0;
            string[] Size = {"XS","S","M","L","XL"};
            string[] Make = {"Cotton","Linnen","Wool","Polyester"};
            string[] Color = {"Black","Purple","White","Yellow","Pink","Blue","Red"};
            string[] Region = {"Europe","Asia","Africa","North America","South America","Ocania"};
            String[] Season = {"Summer","Winter","Autumn","Spring"};
            while (y < 200)
            {
                string RealSize = Size[new Random().Next(0,Size.Length)];
                Product p = new Product
                {
                    ProductId = y,
                    Name =  Faker.Name.First()+" " + Clothingname[pp]+ " " + RealSize,
                    Make = Make[new Random().Next(0,Make.Length)],
                    Price = rnd.Next(5,100).ToString(),
                    Stock = "0",
                    Size  = RealSize,
                    Color = Color[new Random().Next(0,Color.Length)],
                    Region = Region[new Random().Next(0,Region.Length)],
                    Season = Season[new Random().Next(0,Season.Length)],
                    CategoryId = rnd.Next(2,6)
                };
                db.Products.Add(p);
                db.SaveChanges();
                y = y + 1;
                pp = pp + 1;
                if (pp == 15 ){pp = 0;}
            }
            }
            //Function to Create Images // Sixth
            void CreateImages()
            {
                int z = 1;
                string[] UrlsCats = {"https://placekitten.com/200/300","http://placekitten.com/g/200/300","http://placebear.com/300/200"};
                while(z<200)
                {
                    Image i = new Image
                    {
                        ImageId = z,
                        Url = UrlsCats[rnd.Next(0,UrlsCats.Length)],
                        Description = "Picture of Cats",
                        Order = rnd.Next(1,3).ToString(),
                        ProductId = z 
                        
                    };
                    db.Images.Add(i);
                    db.SaveChanges();
                    z = z + 1;
                }
            }
            //Function to Create Adresses // Last
            void CreateAddresses()
            {
                int b = 1;
                string[] TypeAdresses = {"FactuurAddress","BezorgAddress"};
                while(b<100)
                {
                    TripStyle.Models.Address  a = new TripStyle.Models.Address
                    {
                        AddressId = b,
                        Type = TypeAdresses[rnd.Next(0,TypeAdresses.Length)],
                        Street = Faker.Address.StreetName(),
                        City = Faker.Address.City(),
                        Country = Faker.Address.Country(),
                        UserId = b
                    };
                    db.Addresses.Add(a);
                    db.SaveChanges();
                    b = b + 1;
                } 
            }
            void Database_Generator()
            {
                //Run First
                CreateRole();
                //Run Second
                CreateBasket();  
                //Run Thrid   
                CreateCategories();
                //Run Fourth
                CreateUser();
                //Run Fifth
                CreateProducts();
                //Run Sixth
                CreateImages();
                //Run Seventh();
                CreateAddresses();
            
            }
            Database_Generator();
        }

            
        }
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
