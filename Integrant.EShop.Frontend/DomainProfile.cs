using AutoMapper;
using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Integrant.EShop.Frontend
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            //CreateMap<User, UserInfo>().ForMember(des=>des.Id, opt=>opt.MapFrom(src=>src.Id));
            CreateMap<User, UserInfo>();
            CreateMap<Product, ProductInfo>();
        }
    }
}
