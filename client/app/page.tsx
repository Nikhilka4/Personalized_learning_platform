"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = () => {
  return (
  <div>
    <Heading 
      title="ELearning"
      description="Elearning is a platform for students to learn and get help from teachers"
      keywords="Programming,MERN,AI-ML"
    />
  </div>
  )
};


export default Page;