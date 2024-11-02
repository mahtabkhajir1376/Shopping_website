import React from "react";

interface SearchInputProps {
  icon: string;
  bgColor: string;
  width: string;
  bgInput: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  icon,
  bgColor,
  width,
  bgInput,
}) => {
  return (
    <div
      className={`flex flex-row justify-start items-center  py-3 px-3 rounded-[5px]  ${bgColor} ${width}`}
    >
      <img src={icon} alt="" />
      <input
        type="text"
        className={` placeholder:text-sm ${bgInput} mr-3 font-iransansNumber placeholder:font-medium  outline-none`}
        placeholder="جستجو"
      />
    </div>
  );
};

export default SearchInput;
