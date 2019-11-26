using AutoMapper;
using Integrant.EShop.Data.Context.Sql;
using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Contracts.Repositories;
using Integrant.EShop.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMapper _Mapper;
        private readonly IntegrantEShopDbContext _DbContext;
        public ProductRepository(IntegrantEShopDbContext dbContext, IMapper mapper)
        {
            this._DbContext = dbContext;
            this._Mapper = mapper;
        }

        public async Task<IEnumerable<ProductInfo>> GetAllProduct(ProductFilter filter)
        {
            List<ProductInfo> productListInfo = new List<ProductInfo>();
            IEnumerable<Product> productList = new List<Product>();
            if (filter != null && filter.minPrice >0 && filter.maxPrice > 0)
            {
                  productList = await _DbContext.Product.Where(s=>s.Price >= filter.minPrice && s.Price <= filter.maxPrice)
                    .Select(p=> new Product
                    {
                        Id = p.Id,
                        Name = p.Name,
                        ProductImages = p.ProductImages.Where(s => s.IsDefault).ToList(),
                        Description = p.Description,
                        Price = p.Price,
                        FullDescription = p.FullDescription
                    }).ToListAsync();
            }
            else
            {
                productList =await _DbContext.Product.Select(p => new Product
                {
                    Id = p.Id,
                    Name = p.Name,
                    ProductImages = p.ProductImages.Where(s => s.IsDefault).ToList(),
                    Description = p.Description,
                    Price = p.Price,
                    FullDescription = p.FullDescription
                }).ToListAsync();
            }
            foreach (var item in productList)
            {
                var productInfo = _Mapper.Map<ProductInfo>(item);
                if (item.ProductImages.FirstOrDefault() != null)
                    productInfo.ImageURL = item.ProductImages.FirstOrDefault().ImageURL;
                productListInfo.Add(productInfo);
            }
            return productListInfo;
        }
        public async Task<ProductInfo> GetProductById(int Id)
        {
            var product =await _DbContext.Product.Include(s=>s.ProductImages).FirstOrDefaultAsync(s => s.Id == Id);
            var productInfo = _Mapper.Map<ProductInfo>(product);
            productInfo.ImagesURLList = new List<string>();
            foreach (var item in product.ProductImages)
            {
                productInfo.ImagesURLList.Add(item.ImageURL);
            }
            return productInfo;
        }
    }
}
