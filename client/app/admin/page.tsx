'use client'
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtectedr";
import DashboardHero from "../components/Admin/Dashboard/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning"
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,AI-ML"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero isDashboard={true}/>
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
