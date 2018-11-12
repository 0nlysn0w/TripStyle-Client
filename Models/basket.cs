using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TripStyle.Models
{
    public class Basket
    {
        public int BasketId { get; set; }
        public User User { get; set; }
        public ICollection<BasketProduct> BasketProducts { get; set; }

    }
}