import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  ContainerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}
