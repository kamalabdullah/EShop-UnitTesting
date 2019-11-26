using Integrant.EShop.Data.Contracts.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Data.Contracts.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductInfo>> GetAllProduct(ProductFilter filter);
        Task<ProductInfo> GetProductById(int Id);
    }
}
