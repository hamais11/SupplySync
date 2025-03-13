import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type Option = {
  id: string | number;
  title: string;
};

type SelectInputProps = {
  label: string;
  name: string;
  register: (name: string) => any; // Se estiver usando React Hook Form, pode melhorar a tipagem depois
  className?: string;
  options: Option[];
  multiple?: boolean;
  errors?: FieldErrors<FieldValues>;
};

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple=false
}: SelectInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          multiple={multiple }
          className="block w-full rounded-md border-0 py-2 dark:bg-transparent dark:text-slate-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}