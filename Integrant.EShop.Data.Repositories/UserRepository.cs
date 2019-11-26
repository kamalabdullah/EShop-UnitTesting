using AutoMapper;
using Integrant.EShop.Data.Context.Sql;
using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Contracts.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Integrant.EShop.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMapper _Mapper;
        private readonly IntegrantEShopDbContext _DbContext;
        public UserRepository(IntegrantEShopDbContext dbContext, IMapper mapper)
        {
            this._DbContext = dbContext;
            this._Mapper = mapper;
        }
        public UserInfo GetUserByName(string name)
        {
            var user = _DbContext.User.FirstOrDefault(s=>s.Name.ToLower() == name.ToLower());
            if (user == null)
                return null;
            UserInfo userInfo = _Mapper.Map<UserInfo>(user);
            return userInfo;
        }
    }
}
