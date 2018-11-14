using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly TripStyleContext _context;

        public CategoryController(TripStyleContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _context.Categories.ToList();
        }

        [HttpGet("{id}", Name = "GetCategory")]
        public ActionResult<Category> GetById(int id)
        {
            Category category = _context.Categories.Find(id);
            if  (category == null)
            {
                return NotFound();
            }

            return category;
        }

        [HttpPost]
        public IActionResult Create(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();

            //return Ok();
            return CreatedAtRoute("GetCategory", new { id = category.CategoryId}, category);
        }
    }
}