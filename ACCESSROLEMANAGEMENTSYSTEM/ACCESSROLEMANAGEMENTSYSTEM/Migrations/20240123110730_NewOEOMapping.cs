using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ACCESSROLEMANAGEMENTSYSTEM.Migrations
{
    public partial class NewOEOMapping : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsModified",
                table: "OtherEntitlementOwnerMapping");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsModified",
                table: "OtherEntitlementOwnerMapping",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
