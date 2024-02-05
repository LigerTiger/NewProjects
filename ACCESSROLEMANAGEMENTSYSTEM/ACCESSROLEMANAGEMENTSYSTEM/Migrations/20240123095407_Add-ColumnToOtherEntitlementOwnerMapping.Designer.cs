﻿// <auto-generated />
using System;
using ACCESSROLEMANAGEMENTSYSTEM.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ACCESSROLEMANAGEMENTSYSTEM.Migrations
{
    [DbContext(typeof(ARMSContext))]
    [Migration("20240123095407_Add-ColumnToOtherEntitlementOwnerMapping")]
    partial class AddColumnToOtherEntitlementOwnerMapping
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ACCESSROLEMANAGEMENTSYSTEM.Models.Employee", b =>
                {
                    b.Property<string>("EmpAdid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("BusinessUnit")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CorporateDesignation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmployeeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FunctionalDesignation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int>("OtherEntitlementOwnerMappingSrNo")
                        .HasColumnType("int");

                    b.HasKey("EmpAdid");

                    b.HasIndex("OtherEntitlementOwnerMappingSrNo");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("ACCESSROLEMANAGEMENTSYSTEM.Models.OtherEntitlementOwnerMapping", b =>
                {
                    b.Property<int>("SrNo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SrNo"), 1L, 1);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmpAdId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsModified")
                        .HasColumnType("bit");

                    b.Property<string>("ModifiedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("ModifiedOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SrNo");

                    b.ToTable("OtherEntitlementOwnerMapping");
                });

            modelBuilder.Entity("ACCESSROLEMANAGEMENTSYSTEM.Models.Employee", b =>
                {
                    b.HasOne("ACCESSROLEMANAGEMENTSYSTEM.Models.OtherEntitlementOwnerMapping", "OtherEntitlementOwnerMapping")
                        .WithMany()
                        .HasForeignKey("OtherEntitlementOwnerMappingSrNo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OtherEntitlementOwnerMapping");
                });
#pragma warning restore 612, 618
        }
    }
}