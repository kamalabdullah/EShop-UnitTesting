using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Integrant.EShop.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Integrant.EShop.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("GetUserByUserName")]
        public IActionResult GetUserByUserName(string userName)
        {
            try
            {
                return Ok(userService.GetUserByName(userName));
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

        }
    }
}