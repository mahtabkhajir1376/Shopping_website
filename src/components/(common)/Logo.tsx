import React from 'react';
import Link from 'next/link';

const  Logo:React.FC=()=> {
  return (
    <Link
    href={"/"}
    className="flex flex-row justify-between items-center w-[10%]"
  >
    <img src="/icons/logo.svg" alt="" />
    <p className="text-[#2E8B57] md:text-base font-iransansNumber font-demiBold ">سفری به قله</p>
  </Link>
  )
}

export default Logo