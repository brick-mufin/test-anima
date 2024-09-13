import React from "react";
import firstst from "@/images/1st.svg";
import Image from "next/image";

const HomeContent = () => {
  return (
    <div className="absolute top-0  sm:left-0 bottom-0 2xl:left-[192px] w-full h-full flex flex-col  sm:justify-end pb-10 lg:justify-center px-[40px]">
      <h1 className="text-5xl font-extrabold text-white sm:text-[55px] lg:text-[127px]">
        <div className="flex items-center">
          <span className="me-[60px]">THE </span>
          <Image width={127} height={106} alt="" src={firstst} />
        </div>
        BUILDING
      </h1>
      <p className="mt-6 text-[32px] font-bold">최고의 공간을 경험하세요</p>
      <p className="text-xl mt-2 font-normal">국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.</p>
    </div>
  );
};

export default HomeContent;
