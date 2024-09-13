import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/images/logo.svg";
import LanguageIcon from "@/images/languageIcon.svg";
import Hamburger from "@/images/menu.svg";

const links = [
  { href: "/", label: "센터원" },
  { href: "/about", label: "이용안내" },
  { href: "/contact", label: "서비스소개" },
  { href: "/examples", label: "임대문의" },
  { href: "/blog", label: "고객지원" },
];

const Header: React.FC = () => {
  return (
    <nav className={`h-[80px] sm:px-[40px] 2xl:mx-[192px] flex justify-center`}>
      <div className="flex items-center w-full sm:justify-between z-10">
        <div className="me-[80px]">
          <Image width={300} height={30} alt="" src={Logo} className="cursor-pointer" />
        </div>
        <nav className="sm:hidden xl:flex  w-full h-full items-center ">
          {links.map(({ href, label }) => (
            <Link
              className="w-[168px] h-[32px] text-white text-xl font-bold text-center  hover:text-gray-300"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>{" "}
        <div className="sm:hidden xl:flex items-center justify-center w-[46px] h-[46px]">
          <Image className="cursor-pointer" width={24} height={24} alt="" src={LanguageIcon} />
        </div>
        <div className="sm:block xl:hidden">
          <Image className="cursor-pointer" width={24} height={24} alt="" src={Hamburger} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
