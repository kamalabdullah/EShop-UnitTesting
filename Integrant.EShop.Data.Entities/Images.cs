using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Integrant.EShop.Data.Entities
{
    public class Images
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(256)]
        public string ImageURL { get; set; }
        public int ProductId { get; set; }
        [MaxLength(256)]
        public bool IsDefault { get; set; }
    }
}
