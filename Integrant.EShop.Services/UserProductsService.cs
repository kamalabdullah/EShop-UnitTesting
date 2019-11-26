using Integrant.EShop.Data.Contracts.Repositories;
using Integrant.EShop.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Services
{
    public class UserProductsService : IUserProductsService
    {
        private readonly IUserProductsRepository _userProductsRepository;
        public UserProductsService(IUserProductsRepository userProductsRepository)
        {
            this._userProductsRepository = userProductsRepository;
        }
        public async Task AddProductsToUser(int userId, List<int> productListIds)
        {
           await this._userProductsRepository.AddProductsToUser(userId, productListIds);
        }
    }
}
