using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace TripStyle.Models
{
    public class BasketProduct
    {
        public int BasketId { get; set; }
        public Basket Basket { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public string Quantity { get; set; }

    }
}