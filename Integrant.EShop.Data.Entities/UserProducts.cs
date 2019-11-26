using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Integrant.EShop.Data.Entities
{
    [Table("UserProducts")]
    public class UserProducts
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }
    }
}
