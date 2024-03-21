import { styles } from "@/app/styles/styles";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";

type Props = {};

const EditHero: FC<Props> = (props: Props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data,refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("Hero updated successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [data, isSuccess, error]);

  const handleUpdate = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    await editLayout({
      type: "banner",
      image,
      title,
      subTitle,
    });
  };

  return (
    <>
      <div className="w-full h-[100vh] 1000px:flex items-center justify-center">
        <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[500px] 1500px:w-[500px] 1100px:h-[350px] 1100px:w-[350px] h-[70vh] w-[35vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem] flex items-center justify-center z-10"></div>
        <div className="relative left-[80px] flex items-center justify-center z-20">
          <img
            src={image}
            alt=""
            className="object-contain items-center 1100px:max-w-[70%] w-[70%] 1500px: max-w-[65%] h-[auto] z-30"
          />
          <input
            type="file"
            name=""
            id="banner"
            accept="image/*"
            onChange={handleUpdate}
            className="hidden"
          />
          <label htmlFor="banner" className="absolute bottom-0 right-0 z-40">
            <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
          </label>
        </div>
        <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
          <textarea
            className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[50px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%] 1100px:w-[78%] bg-transparent"
            placeholder="Improve Your Online Learning experience"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={3}
          ></textarea>
          <br />
          <textarea
            className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%] bg-transparent"
            value={subTitle}
            placeholder="We have over 40k+ Online Courses & 500k+ Online registered students. Find 
                 your desired course and start learning today!"
            onChange={(e) => setSubTitle(e.target.value)}
          ></textarea>
          <br />
          <br />
          <br />
          <div
            className={`${
              styles.button
            } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34]
                ${
                  data?.layout?.banner?.title !== title ||
                  data?.layout?.banner?.subTitle !== subTitle ||
                  data?.layout?.banner?.image?.url !== image
                    ? "!cursor-pointer !bg-[#42d383]"
                    : "!cursor-not-allowed"
                }
                !rounded absolute bottom-12 right-12`}
            onClick={
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? handleEdit
                : () => null
            }
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHero;
