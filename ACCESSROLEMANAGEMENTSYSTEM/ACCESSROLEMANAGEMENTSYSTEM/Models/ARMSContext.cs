using Microsoft.EntityFrameworkCore;

namespace ACCESSROLEMANAGEMENTSYSTEM.Models
{
    public class ARMSContext : DbContext
    {
        public ARMSContext(DbContextOptions<ARMSContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<OtherEntitlementOwnerMapping> OtherEntitlementOwnerMapping { get; set; }
    }
}
