using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARMS.Migrations
{
    public partial class ARMS_Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpAdid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EmployeeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BusinessUnit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CorporateDesignation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FunctionalDesignation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpAdid);
                });

            migrationBuilder.CreateTable(
                name: "OEOMappings",
                columns: table => new
                {
                    SrNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsModified = table.Column<bool>(type: "bit", nullable: false),
                    Active = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OEOMappings", x => x.SrNo);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeOEOMappings",
                columns: table => new
                {
                    EmpAdid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    SrNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeOEOMappings", x => new { x.EmpAdid, x.SrNo });
                    table.ForeignKey(
                        name: "FK_EmployeeOEOMappings_Employees_EmpAdid",
                        column: x => x.EmpAdid,
                        principalTable: "Employees",
                        principalColumn: "EmpAdid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeOEOMappings_OEOMappings_SrNo",
                        column: x => x.SrNo,
                        principalTable: "OEOMappings",
                        principalColumn: "SrNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeOEOMappings_SrNo",
                table: "EmployeeOEOMappings",
                column: "SrNo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeOEOMappings");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "OEOMappings");
        }
    }
}
