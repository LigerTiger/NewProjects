using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ARMS.Models
{
    public class EmployeeOEOMapping
    {
        // Foreign keys
        [ForeignKey("Employee")]
        public string EmpAdid { get; set; }
        [JsonIgnore]
        public Employee Employee { get; set; }


        // Navigation properties

        [ForeignKey("OEOMapping")]
        public int SrNo { get; set; }
        
        public OEOMapping OEOMapping { get; set; }
        //public string Type { get;  set; }
    }
}
