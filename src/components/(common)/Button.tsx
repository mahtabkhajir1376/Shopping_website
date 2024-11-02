import React from "react";

interface ButtonProps {
  textBtn: string;
  bgColor: string;
  width: string;
  height: string;
  fontSize: string;
  haveIcon: boolean;
}

const Button: React.FC<ButtonProps> = ({
  textBtn,
  bgColor,
  width,
  height,
  fontSize,
  haveIcon = false,
}) => {
  return (
    <>
      {haveIcon ? (
        <button
          className={`${bgColor} ${width} ${height} ${fontSize} font-iransansNumber text-white rounded-[5px] md:text-sm flex flex-row justify-center items-center py-2 px-4`}
        >
          <img src="/icons/user.svg" alt="" className="w-5 h-5 ml-2" />
          {textBtn}
        </button>
      ) : (
        <button
          className={`${bgColor} ${width} ${height} ${fontSize} font-iransansNumber md:text-sm text-white`}
        >
          {textBtn}
        </button>
      )}
    </>
  );
};

export default Button;
