using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    [Route("api/[controller]")]
    public class PurchaseLineController : Controller
    {
        private readonly TripStyleContext _context;

        public PurchaseLineController(TripStyleContext context)
        {
            _context = context;
        }

        // TODO: implement correct CRUD functions. The current one are just placeholders
        [HttpGet]
        public IEnumerable<PurchaseLine> Get()
        {
            return _context.PurchasesLine.ToList();
        }

        [HttpGet("{id}", Name = "GetPurchaseLine")]
        public ActionResult<PurchaseLine> GetById(int id)
        {
            PurchaseLine purchaseLine = _context.PurchasesLine.Find(id);
            if (purchaseLine == null)
            {
                return NotFound();
            }

            return purchaseLine;
        }

        [HttpPost]
        public IActionResult Create([FromBody]PurchaseLine purchaseLine)
        {
            _context.PurchasesLine.Add(purchaseLine);
            _context.SaveChanges();

            return CreatedAtRoute("GetPurchaseLine", new { id = purchaseLine.PurchaseLineId }, purchaseLine);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]PurchaseLine purchaseLine)
        {
            var todo = _context.PurchasesLine.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.PurchasesLine.Update(todo);
            _context.SaveChanges();
            return CreatedAtRoute("GetPurchaseLine", new { id = purchaseLine.PurchaseLineId }, purchaseLine);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.PurchasesLine.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.PurchasesLine.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }
    }
}