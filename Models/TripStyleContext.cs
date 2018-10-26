using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TripStyle.Models
{
    public class TripStyleContext : DbContext
    {
        public TripStyleContext(DbContextOptions<TripStyleContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
		// 	optionsBuilder.UseSqlite("Data Source=tripstyle.db");
        // }
    }
}