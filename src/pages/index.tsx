import Header from "@/components/Header";
import Image from "next/image";
import Background from "@/images/homebg.png";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <>
      <div className=" bg-black bg-opacity-50 relative ">
        <Header />
        <Image className=" sm:h-[640px] md:h-[640px] lg:h-full  -mt-[80px] w-full" alt="" src={Background} />
        <HomeContent />
      </div>
      <section className="bg-[#242424] h-[200px]"></section>
    </>
  );
}
