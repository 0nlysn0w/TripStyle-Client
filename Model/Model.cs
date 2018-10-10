using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;

namespace TripStyle.Model
{
    public class MovieContext : DbContext
    {

        public DbSet<User> User { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Review> Review { get; set; }
        public DbSet<OrderedProduct> OrderedProduct { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseNpgsql("User ID=postgres;Password=admin;Host=localhost;Port=5432;Database=TripStyleDB;Pooling=true;");
        }
        // protected override void OnModelCreating (ModelBuilder modelBuilder) {
        //     modelBuilder.Entity<Actor> ()
        //         .HasOne(m => m.Movie)
        //         .WithMany (a => a.Actors)
        //         .HasForeignKey (m => m.MovieId);
        // }
    }


    public class User
    {
        [Key] public int UserId { get; set; }
        public Role Role{ get; set; }
        public int RoleId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public int phonenumber { get; set; }
        public int Password { get; set; }
        public DateTime Birthday { get; set; }
    }

    public class Role
    {
        [Key] public int RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }
    public class Product
    {
        [Key] public int ProductId { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
        public int Stock { get; set; }
        public string color { get; set; }
        public string region { get; set; }
        public string Make { get; set; }
        public string Season { get; set; }
    }
    public class Order
    {
        [Key] public int OrderId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public Address Address { get; set; }
        public int AdressId { get; set; }
        public DateTime OrderDate { get; set; }

    }
    public class Review
    {
        [Key] public int ReviewId { get; set; }
        public User User{ get; set; }
        public int UserId { get; set; }
        public Product Product{get; set; }
        public int ProductId { get; set; }
        public string Text { get; set; }
        public string Rating { get; set; }

    }
    public class Address
    {
        [Key] public int AdressId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string Type { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
    public class OrderedProduct
    {
        [Key] public int OrderId { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
    public class Category
    {
        [Key] public int CategoryId { get; set; }
        public int ParrentCategory { get; set; }
        public string Name { get; set; }
    }
}