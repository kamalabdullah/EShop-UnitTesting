using Integrant.EShop.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Data.Context.Sql
{
    public class IntegrantEShopDbContext : DbContext
    {
        public IntegrantEShopDbContext(DbContextOptions<IntegrantEShopDbContext> options) 
            : base(options)
        {
        }
        public DbSet<Product> Product { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<UserProducts> UserProducts { get; set; }
    }
}
