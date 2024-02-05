using System.ComponentModel.DataAnnotations;

namespace ACCESSROLEMANAGEMENTSYSTEM.Models
{
    public class OtherEntitlementOwnerMapping
    {
        [Key]
        public int SrNo { get; set; } //
        public string Type { get; set; }

        public string EmpAdId { get; set; }

        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string ModifiedBy { get; set; }


        public bool Active { get; set; }

        



    }

}

