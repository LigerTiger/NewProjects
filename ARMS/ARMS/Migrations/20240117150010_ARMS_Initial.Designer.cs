﻿// <auto-generated />
using System;
using ARMS.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ARMS.Migrations
{
    [DbContext(typeof(OEOMContext))]
    [Migration("20240117150010_ARMS_Initial")]
    partial class ARMS_Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ARMS.Models.Employee", b =>
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

                    b.HasKey("EmpAdid");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("ARMS.Models.EmployeeOEOMapping", b =>
                {
                    b.Property<string>("EmpAdid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("SrNo")
                        .HasColumnType("int");

                    b.HasKey("EmpAdid", "SrNo");

                    b.HasIndex("SrNo");

                    b.ToTable("EmployeeOEOMappings");
                });

            modelBuilder.Entity("ARMS.Models.OEOMapping", b =>
                {
                    b.Property<int>("SrNo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SrNo"), 1L, 1);

                    b.Property<string>("Active")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsModified")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("ModifiedOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SrNo");

                    b.ToTable("OEOMappings");
                });

            modelBuilder.Entity("ARMS.Models.EmployeeOEOMapping", b =>
                {
                    b.HasOne("ARMS.Models.Employee", "Employee")
                        .WithMany("OEOMappings")
                        .HasForeignKey("EmpAdid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ARMS.Models.OEOMapping", "OEOMapping")
                        .WithMany("Employees")
                        .HasForeignKey("SrNo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employee");

                    b.Navigation("OEOMapping");
                });

            modelBuilder.Entity("ARMS.Models.Employee", b =>
                {
                    b.Navigation("OEOMappings");
                });

            modelBuilder.Entity("ARMS.Models.OEOMapping", b =>
                {
                    b.Navigation("Employees");
                });
#pragma warning restore 612, 618
        }
    }
}
