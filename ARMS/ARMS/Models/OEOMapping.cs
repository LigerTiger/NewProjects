using System.ComponentModel.DataAnnotations;

namespace ARMS.Models
{
    public class OEOMapping
    {

        [Key]
        public int SrNo { get; set; }
        public string Type { get; set; }
        // Tracking creation and modification
        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public bool IsModified { get; set; }

        public string Active { get; set; }
        public ICollection<EmployeeOEOMapping> Employees { get; set; }
    }
}
