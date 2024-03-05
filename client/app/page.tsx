"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";


interface Props {}

const Page: FC<Props> = (props) => {
  const [open,setOpen] = useState(false);
  const [activeItem,setActiveItem] = useState(0);
  return (
  <div>
    <Heading 
      title="ELearning"
      description="Elearning is a platform for students to learn and get help from teachers"
      keywords="Programming,MERN,AI-ML"
    />
    <Header
     open = {open}
     setOpen = {setOpen}
     activeItem = {activeItem}
    />
  </div>
  )
};


export default Page;