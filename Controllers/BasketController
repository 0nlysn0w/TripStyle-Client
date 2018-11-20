using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    [Route("api/[controller]")]
    public class BasketController : Controller
    {
        private readonly TripStyleContext _context;

        public BasketController(TripStyleContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Basket> Get()
        {
            return _context.Baskets.ToList();
        }

        [HttpGet("{id}", Name = "GetBasket")]
        public ActionResult<Basket> Get(int id)
        {
            Basket Basket = _context.Baskets.Find(id);
            if  (Basket == null)
            {
                return NotFound();
            }

            return Basket;
        }

        [HttpPost]
        public IActionResult Create([FromBody]Basket Basket)
        {
            _context.Baskets.Add(Basket);
            _context.SaveChanges();

            return CreatedAtRoute("GetBasket", new { id = Basket.BasketId}, Basket);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Basket Basket)
        {
            var todo = _context.Baskets.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Baskets.Update(todo);
            _context.SaveChanges();
            return CreatedAtRoute("GetBasket", new { id = Basket.BasketId }, Basket);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.Baskets.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Baskets.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }

    }
}