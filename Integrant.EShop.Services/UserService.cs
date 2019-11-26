using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Contracts.Repositories;
using Integrant.EShop.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        public UserInfo GetUserByName(string name)
        {
            return _userRepository.GetUserByName(name);
        }
    }
}
