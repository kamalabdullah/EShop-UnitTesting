using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Integrant.EShop.Data.Entities
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(256)]
        public string Name { get; set; }
        [MaxLength(256)]
        public string Description { get; set; }
        [MaxLength(1000)]
        public string FullDescription { get; set; }
        public double? Price { get; set; }
        public List<Images> ProductImages { get; set; }

    }
}
