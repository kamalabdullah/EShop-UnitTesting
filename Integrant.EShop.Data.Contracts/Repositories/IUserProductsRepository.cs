using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Data.Contracts.Repositories
{
    public interface IUserProductsRepository
    {
        Task AddProductsToUser(int userId, List<int> productListIds);
    }
}
