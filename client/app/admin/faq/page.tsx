"use client";
import React from "react";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtectedr";
import DashboardHero from "../../../app/components/Admin/Dashboard/DashboardHero";
import EditFaq from "../../components/Admin/Customization/EditFaq"

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
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
