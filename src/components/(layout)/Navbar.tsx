import React from "react";
import SearchInput from "../(common)/SearchInput";
import Link from "next/link";
import Logo from "../(common)/Logo";
import Button from "../(common)/Button";

const Navbar: React.FC = () => {
  const navbarLinks = [
    { name: "صفحه اصلی", url: "/" },
    { name: "محصولات ما", url: "/" },
    { name: "برند ما", url: "/" },
    { name: "مجله کوهنوردی", url: "/" },
    { name: "ارتباط با ما", url: "/" },
  ];

  return (
    <div className="flex flex-col w-full py-3">
      <div className="flex flex-row justify-between items-center font-iransansNumber border-b-[1px] border-[#F4F4F4]  w-[83.5%] mx-auto pb-3 ">
        <Logo />
        <SearchInput
          bgColor="bg-[#F4F4F4]"
          icon="/icons/search-normal.svg"
          width="md:w-[591px] w-96"
          bgInput="bg-[#F4F4F4]"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-[83.5%] mx-auto py-[7px]">
        <div className="flex flex-row w-[50%] justify-between items-center">
          {navbarLinks.map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index}
                className="text-[#727272] hover:text-[#2E8B57] md:text-base text-sm font-iransansNumber font-medium "
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-center w-[15%]">
          <img src="/icons/shopping-cart.svg" alt="" className="cursor-pointer" />
          <Button
            bgColor="bg-[#2E8B57]"
            haveIcon={true}
            textBtn="ورود / ثبت نام"
            fontSize="md:text-sm font-medium"
            width="md:w-36"
            height="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
