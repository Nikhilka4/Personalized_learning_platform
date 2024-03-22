import React from "react";
import avatar from "../../../public/assets/avatar.png";
import Image from "next/image";
import review from "../../../public/assets/banner.png"
import { styles } from "@/app/styles/styles";
import ReviewCard from "../Review/ReviewCard.tsx";
type Props = {};

export const reviews = [
  {
    name: "John Doe",
    avatar: { avatar },
    profession: "Web Developer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "John Doe",
    avatar: { avatar },
    profession: "Web Developer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "John Doe",
    avatar: { avatar },
    profession: "Web Developer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "John Doe",
    avatar: { avatar },
    profession: "Web Developer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "John Doe",
    avatar: { avatar },
    profession: "Web Developer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[65%]">
          <Image 
          src={review}
          alt=""
          width={500}
          height={500}
          />          
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[35px]`}>
            Our Students are <span className="text-gradient">Our Strength</span>{" "}
            <br />See what they say about us
          </h3>
          <br />
          <p className={`${styles.label}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
          {reviews &&
              reviews.map((i,index) => <ReviewCard item ={i} key={index} />)}


        </div>
      </div>
    </div>
  );
};

export default Reviews;
