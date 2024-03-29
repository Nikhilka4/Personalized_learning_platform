'use client';
import DashboardHero from '@/app/components/Admin/Dashboard/DashboardHero';
import AdminProtected from '@/app/hooks/adminProtectedr';
import Heading from '@/app/utils/Heading';
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import React from 'react'
import AllCourses from "../../components/Admin/Courses/AllCourses";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning"
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,AI-ML"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page