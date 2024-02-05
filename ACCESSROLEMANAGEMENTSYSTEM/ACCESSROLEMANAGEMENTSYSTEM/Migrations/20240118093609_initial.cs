using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACCESSROLEMANAGEMENTSYSTEM.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OtherEntitlementOwnerMapping",
                columns: table => new
                {
                    SrNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpAdId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsModified = table.Column<bool>(type: "bit", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OtherEntitlementOwnerMapping", x => x.SrNo);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpAdid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EmployeeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BusinessUnit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CorporateDesignation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FunctionalDesignation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    OtherEntitlementOwnerMappingSrNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpAdid);
                    table.ForeignKey(
                        name: "FK_Employees_OtherEntitlementOwnerMapping_OtherEntitlementOwnerMappingSrNo",
                        column: x => x.OtherEntitlementOwnerMappingSrNo,
                        principalTable: "OtherEntitlementOwnerMapping",
                        principalColumn: "SrNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_OtherEntitlementOwnerMappingSrNo",
                table: "Employees",
                column: "OtherEntitlementOwnerMappingSrNo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "OtherEntitlementOwnerMapping");
        }
    }
}
