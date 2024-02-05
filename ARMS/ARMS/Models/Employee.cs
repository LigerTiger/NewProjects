using System.ComponentModel.DataAnnotations;

namespace ARMS.Models
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
        public ICollection<EmployeeOEOMapping> OEOMappings { get; set; }
    }
}
