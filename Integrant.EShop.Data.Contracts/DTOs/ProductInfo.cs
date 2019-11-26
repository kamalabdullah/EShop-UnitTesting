using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Data.Contracts.DTOs
{
    public class ProductInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FullDescription { get; set; }
        public double Price { get; set; }
        public string ImageURL { get; set; }
        public List<string> ImagesURLList { get; set; }
    }
}
