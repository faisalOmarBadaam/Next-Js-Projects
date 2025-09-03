"use client";
import { CustomButtonProps } from "@/Types";
import React from "react";

const CustomButton = ({
  title,
  ContainerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${ContainerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
