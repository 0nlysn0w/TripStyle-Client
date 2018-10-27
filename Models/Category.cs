using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TripStyle.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

		public ICollection<Product> Products { get; set; }
    }
}