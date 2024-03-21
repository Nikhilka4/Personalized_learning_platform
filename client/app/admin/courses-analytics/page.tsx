'use client';
import React from 'react'
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from '@/app/utils/Heading';
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from '@/app/components/Admin/Dashboard/DashboardHeader';


type Props = {}

const page = (props: Props) => {
  return (
    <div>
      
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
            <DashboardHeader />
            <CourseAnalytics />
          </div>
        </div>
      
    </div>
  )
}

export default page