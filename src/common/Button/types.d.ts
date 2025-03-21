import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  borderColor?: string;
  onClick?: () => void;
};
