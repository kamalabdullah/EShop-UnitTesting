using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Services.Contracts;
using log4net.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Integrant.EShop.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _ProductService;
        private readonly IUserProductsService _UserProductService;
        public ProductController(IProductService productService, IUserProductsService userProductService)
        {
            this._ProductService = productService;
            this._UserProductService = userProductService;
        }

        [HttpPost("GetAllProduct")]
        public async Task<IActionResult> GetAllProduct([FromBody] ProductFilter filter)
        {
            try
            {
                return  Ok(await  _ProductService.GetAllProduct(filter));
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            try
            {
                return Ok(await _ProductService.GetProductById(id));
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
        [HttpPost("SubmitUserProducts")]
        public async Task<IActionResult> SubmitUserProducts([FromQuery]int userId, [FromBody] List<int> productIds)
        {
            try
            {
                await _UserProductService.AddProductsToUser(userId, productIds);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

        }
    }
}