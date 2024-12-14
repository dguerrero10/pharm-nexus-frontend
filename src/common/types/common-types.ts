import { InputHTMLAttributes, ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  error?: any
  placeholder?: string;
  className?: string;
}

export interface CheckBoxProps {
  label: string;
}
