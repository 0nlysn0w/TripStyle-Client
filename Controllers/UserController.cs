using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    //TODO doesnt work yet
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly TripStyleContext _context;

        public UserController(TripStyleContext context)
        {
            // _context = context;
            //   if (_context.Users.Count() == 0)
            //   {
            //       var user = new User
            //       {
            //          UserId = 1,
            //          Firstname = "Luuk",
            //          Lastname = "Crushly",
            //          BasketId = 1
            //       };

            //       _context.Add(user);
            //       _context.SaveChanges();
            //   }
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _context.Categories.ToList();
        }

        [HttpGet("{id}",Name = "GetUser")]
        public ActionResult<User> GetById(int id)
        {
            User user = _context.Users.Find(id);
            if  (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        public IActionResult Create(User user)
        {
            if(user== null){return NoContent();}
            _context.Users.Add(user);
            _context.SaveChanges();

            //return Ok();
            return CreatedAtRoute("GetUser", new { Userid = user.UserId, Firstname = user.Firstname,Lastname = user.Lastname,Gender = user.Gender,Email = user.Email,Phonenumber = user.Phonenumber,Password = user.Password,Birthday = user.Birthdate,BasketId = user.BasketId});
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.Users.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Users.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }

    }
}