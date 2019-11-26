using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Services.Contracts
{
    public interface IUserProductsService
    {
        Task AddProductsToUser(int userId, List<int> productListIds);
    }
}
