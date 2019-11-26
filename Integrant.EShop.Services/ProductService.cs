using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Contracts.Repositories;
using Integrant.EShop.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository ?? throw new ArgumentNullException(nameof(productRepository));
        }
        public async Task<IEnumerable<ProductInfo>> GetAllProduct(ProductFilter filter)
        {
            return await _productRepository.GetAllProduct(filter);
        }

        public async Task<ProductInfo> GetProductById(int Id)
        {
            if (Id <= 0)
            {
                return null;
            }
            return await _productRepository.GetProductById(Id);
        }
    }
}
