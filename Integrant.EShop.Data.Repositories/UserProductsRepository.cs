using AutoMapper;
using Integrant.EShop.Data.Context.Sql;
using Integrant.EShop.Data.Contracts.Repositories;
using Integrant.EShop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Data.Repositories
{
    public class UserProductsRepository: IUserProductsRepository
    {
        private readonly IMapper _Mapper;
        private readonly IntegrantEShopDbContext _DbContext;
        public UserProductsRepository(IntegrantEShopDbContext dbContext, IMapper mapper)
        {
            this._DbContext = dbContext;
            this._Mapper = mapper;
        }
        public async Task AddProductsToUser(int userId,List<int> productListIds)
        {
            List<UserProducts> userProductsList = new List<UserProducts>();
            foreach (var item in productListIds)
            {
                userProductsList.Add(new UserProducts { ProductId = item, UserId = userId });
            }
         await _DbContext.UserProducts.AddRangeAsync(userProductsList);
            _DbContext.SaveChanges();
        }
    }
}
