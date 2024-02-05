using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACCESSROLEMANAGEMENTSYSTEM.Migrations
{
    public partial class AddColumnToOtherEntitlementOwnerMapping : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "OtherEntitlementOwnerMapping",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "OtherEntitlementOwnerMapping");
        }
    }
}
