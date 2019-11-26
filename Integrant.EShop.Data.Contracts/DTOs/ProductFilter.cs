using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Data.Contracts.DTOs
{
    public class ProductFilter
    {
        public int minPrice { get; set; }
        public int maxPrice { get; set; }
    }
}
