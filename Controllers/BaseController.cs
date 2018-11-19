using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TripStyle.Models;

namespace TripStyle.Controllers
{
    //[Route("api/[controller]")]
    public class BaseController : Controller
    {
        private readonly TripStyleContext _context;

        public BaseController(TripStyleContext context)
        {
            _context = context;
        }

    }
}