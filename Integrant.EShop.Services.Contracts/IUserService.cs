using Integrant.EShop.Data.Contracts.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Services.Contracts
{
    public interface IUserService
    {
        UserInfo GetUserByName(string name);
    }
}
