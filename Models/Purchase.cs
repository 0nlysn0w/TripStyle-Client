using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace TripStyle.Models
{
    public class Purchase
    {
        public int PurchaseId { get; set; }
        public DateTime OrderDate { get; set; }

        public User User { get; set; }
        public Address DeliveryAddress { get; set; }
        public ICollection<PurchasedProduct> PurchasedProducts { get; set; }
    }
}