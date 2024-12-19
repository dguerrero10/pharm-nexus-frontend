import { ReactNode, SelectHTMLAttributes } from "react";

export interface Children {
  children: ReactNode;
}

export interface AutoCompleteOption {
  value: string | number;
  label: string;
  searchItem: string | "";
}

export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  error?: any;
  placeholder?: string;
  className?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  filterFn?: any;
  autoCompleteOptions?: AutoCompleteOption[] | undefined;
}

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  error?: any;
  options: { value: string; label: string }[];
}

export interface CheckBoxProps {
  label: string;
}
