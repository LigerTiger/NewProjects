using System.ComponentModel.DataAnnotations;

namespace ACCESSROLEMANAGEMENTSYSTEM.Models
{
    public class Employee
    {
        [Key]

        public string EmpAdid { get; set; }
    
        public string EmployeeName { get; set; }

        public string BusinessUnit { get; set; }
        public string CorporateDesignation { get; set; }
        public string FunctionalDesignation { get; set; }

        public bool IsActive { get; set; }

        public int OtherEntitlementOwnerMappingSrNo { get; set; } //  

        public OtherEntitlementOwnerMapping OtherEntitlementOwnerMapping { get; set;}

    }
}
