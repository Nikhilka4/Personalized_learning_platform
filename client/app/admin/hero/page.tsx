"use client";
import DashboardHero from "../../../app/components/Admin/Dashboard/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtectedr";
import Heading from "../../../app/utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";


type Props = {};

const page = ({params}:any) => {
    const id = params.id
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
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <EditHero />
        </div>
      </div>
      </AdminProtected>
    </div>
  );
};

export default page;
