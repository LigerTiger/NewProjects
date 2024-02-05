using ACCESSROLEMANAGEMENTSYSTEM.Models;
using System.ComponentModel.DataAnnotations;

namespace ACCESSROLEMANAGEMENTSYSTEM.DTOs
{
    public class EmployeeModel
    {
        //public string EmpAdid { get; set; }

        public string EmployeeName { get; set; }

        public string BusinessUnit { get; set; }
        public string CorporateDesignation { get; set; }
        public string FunctionalDesignation { get; set; }

        public bool IsActive { get; set; }

        public int OtherEntitlementOwnerMappingSrNo { get; set; }


        //public OtherEntitlementOwnerMapping OtherEntitlementOwnerMapping { get; set; }
    }


    public class OtherEntitlementOwnerMappingDTO
    {
        [Key]
        public int SrNo { get; set; }
        public string Type { get; set; }
        // Tracking creation and modification
        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public bool IsModified { get; set; }



        public bool Active { get; set; }

        //[JsonIgnore]
        public string EmpAdid { get; set; }

    }


    public class EmployeeDTO
    {
        [Key]

        public string EmpAdid { get; set; }

        public string EmployeeName { get; set; }

        public string BusinessUnit { get; set; }
        public string CorporateDesignation { get; set; }
        public string FunctionalDesignation { get; set; }

        public bool IsActive { get; set; }


        public List<OtherEntitlementOwnerMappingDTO> OtherEntitlementOwnerMapping { get; set; }
    }

}
