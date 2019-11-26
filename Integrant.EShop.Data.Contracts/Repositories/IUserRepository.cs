using Integrant.EShop.Data.Contracts.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Data.Contracts.Repositories
{
    public interface IUserRepository
    {
        UserInfo GetUserByName(string name);
    }
}
