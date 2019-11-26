using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Integrant.EShop.Data.Entities
{
    [Table("User")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(256)]
        public string Name { get; set; }
    }
}
