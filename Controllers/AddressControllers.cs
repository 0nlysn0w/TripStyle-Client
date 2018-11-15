using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {
        private readonly TripStyleContext _context;

        public AddressController(TripStyleContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Address> Get()
        {
            return _context.Addresses.ToList();
        }

        [HttpGet("{id}", Name = "GetAddress")]
        public ActionResult<Address> GetById(int id)
        {
            Address address = _context.Addresses.Find(id);
            if  (address == null)
            {
                return NotFound();
            }

            return address;
        }

        [HttpPost]
        public IActionResult Create([FromBody]Address address)
        {
            _context.Addresses.Add(address);
            
            _context.SaveChanges();

            return CreatedAtRoute("GetAddress", new { id = address.AddressId}, address);
        }
       

    }
}