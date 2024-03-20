"use client"
import DashboardHero from "@/app/components/Admin/Dashboard/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtectedr";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSibebar from "../../components/Admin/Sidebar/AdminSidebar"
import EditCategories from "../../components/Admin/Customization/EditCategories"

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
      <Heading
        title="ELearning - Admin"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,AI-ML"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSibebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <EditCategories />
        </div>
      </div>
      </AdminProtected>
    </div>
  );
};

export default page;
