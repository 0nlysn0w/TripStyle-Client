﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TripStyle.Models;

namespace TripStyle.Migrations
{
    [DbContext(typeof(TripStyleContext))]
    partial class TripStyleContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024");

            modelBuilder.Entity("TripStyle.Models.Address", b =>
                {
                    b.Property<int>("AddressId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<string>("Street");

                    b.Property<string>("Type");

                    b.Property<int?>("UserId");

                    b.HasKey("AddressId");

                    b.HasIndex("UserId");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("TripStyle.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("TripStyle.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Order");

                    b.Property<int?>("ProductId");

                    b.Property<string>("Url");

                    b.HasKey("ImageId");

                    b.HasIndex("ProductId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("TripStyle.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CategoryId");

                    b.Property<string>("Color");

                    b.Property<string>("Make");

                    b.Property<string>("Name");

                    b.Property<string>("Price");

                    b.Property<string>("Region");

                    b.Property<string>("Season");

                    b.Property<string>("Size");

                    b.Property<string>("Stock");

                    b.HasKey("ProductId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("TripStyle.Models.Purchase", b =>
                {
                    b.Property<int>("PurchaseId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsConfirmed");

                    b.Property<DateTime>("OrderDate");

                    b.Property<int?>("UserId");

                    b.HasKey("PurchaseId");

                    b.HasIndex("UserId");

                    b.ToTable("Purchases");
                });

            modelBuilder.Entity("TripStyle.Models.PurchaseLine", b =>
                {
                    b.Property<int>("PurchaseId");

                    b.Property<int>("ProductId");

                    b.Property<string>("Make");

                    b.Property<string>("Name");

                    b.Property<string>("Price");

                    b.Property<string>("Quantity");

                    b.HasKey("PurchaseId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("PurchaseLines");
                });

            modelBuilder.Entity("TripStyle.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("TripStyle.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Birthdate");

                    b.Property<string>("Email");

                    b.Property<string>("Firstname");

                    b.Property<string>("Gender");

                    b.Property<string>("Lastname");

                    b.Property<string>("Password");

                    b.Property<string>("Phonenumber");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TripStyle.Models.Address", b =>
                {
                    b.HasOne("TripStyle.Models.User", "User")
                        .WithMany("Addresses")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("TripStyle.Models.Image", b =>
                {
                    b.HasOne("TripStyle.Models.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId");
                });

            modelBuilder.Entity("TripStyle.Models.Product", b =>
                {
                    b.HasOne("TripStyle.Models.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("TripStyle.Models.Purchase", b =>
                {
                    b.HasOne("TripStyle.Models.User", "User")
                        .WithMany("Purchases")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("TripStyle.Models.PurchaseLine", b =>
                {
                    b.HasOne("TripStyle.Models.Product", "Product")
                        .WithMany("PurchaseLines")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TripStyle.Models.Purchase", "Purchase")
                        .WithMany("PurchaseLines")
                        .HasForeignKey("PurchaseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TripStyle.Models.User", b =>
                {
                    b.HasOne("TripStyle.Models.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
