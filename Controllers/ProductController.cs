using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly TripStyleContext _context;

        public ProductController(TripStyleContext context)
        {
            _context = context;

            // if (_context.Products.Count() == 0)
            // {
            //     var product = new Product
            //     {
            //         Name = "Backpack",
            //         Make = "Douchebags",
            //         Category = new Category
            //         {
            //             Name = "Bags"
            //         }
            //     };

            //     _context.Add(product);
            //     _context.SaveChanges();
            // }

        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _context.Products.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            Product product = _context.Products.Find(id);
            if  (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();

            return CreatedAtRoute("Get", new { id = product.ProductId}, product);
        }
    }
}