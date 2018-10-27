using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TripStyle.Models
{
    public class TripStyleContext : DbContext
    {
        public TripStyleContext(DbContextOptions<TripStyleContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Purchase> Purchases { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .IsRequired();

            modelBuilder.Entity<User>()
                .HasMany(u => u.Addresses)
                .WithOne(a => a.User);

            // Product and Purchase many to many
            modelBuilder.Entity<PurchasedProduct>()
                .HasKey(pupo => new { pupo.PurchaseId, pupo.ProductId });

            modelBuilder.Entity<PurchasedProduct>()
                .HasOne(pupo => pupo.Purchase)
                .WithMany(pu => pu.PurchasedProducts)
                .HasForeignKey(pupo => pupo.PurchaseId);

            modelBuilder.Entity<PurchasedProduct>()
                .HasOne(pupo => pupo.Product)
                .WithMany(pr => pr.PurchasedProducts)
                .HasForeignKey(pupo => pupo.ProductId);


        }
    }
}