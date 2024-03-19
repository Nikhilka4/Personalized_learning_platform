"use client";
import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/AdminSidebar";
import Heading from "../../../../app/utils/Heading";
import EditCourse from "../../../components/Admin/Course/EditCourse";
import DashboardHeader from "../../../../app/components/Admin/Dashboard/DashboardHeader";



type Props = {};

const page = ({params}:any) => {
    const id = params.id
  return (
    <div>
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
          <DashboardHeader />
          <EditCourse  id = {id}/>
        </div>
      </div>
    </div>
  );
};

export default page;
