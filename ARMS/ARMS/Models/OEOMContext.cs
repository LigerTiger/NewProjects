using Microsoft.EntityFrameworkCore;

namespace ARMS.Models
{
    public class OEOMContext : DbContext
    {
        public OEOMContext(DbContextOptions<OEOMContext> options)
        : base(options)
        { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<OEOMapping> OEOMappings { get; set; }
        public DbSet<EmployeeOEOMapping> EmployeeOEOMappings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Composite key for EmployeeOEOMapping
            modelBuilder.Entity<EmployeeOEOMapping>()
                .HasKey(eom => new { eom.EmpAdid, eom.SrNo });

            // Configuring the many-to-many relationships
            modelBuilder.Entity<EmployeeOEOMapping>()
                .HasOne(eom => eom.Employee)
                .WithMany(e => e.OEOMappings)
                .HasForeignKey(eom => eom.EmpAdid);

            modelBuilder.Entity<EmployeeOEOMapping>()
                .HasOne(eom => eom.OEOMapping)
                .WithMany(o => o.Employees)
                .HasForeignKey(eom => eom.SrNo);
        }
    }
}
