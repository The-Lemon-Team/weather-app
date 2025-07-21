"use client";

import React from "react";
import classNames from "classnames";

interface IInputProps {
  value: string;

  id?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  role?: "combobox";
  type?: "password" | "text";
  width?: number;

  onChange?: (payload: string) => void;
  onFocus?: () => void;
}

export const Input: React.FC<IInputProps> = ({
  id,
  className,
  label,
  placeholder,
  required = false,
  type = "text",
  value,
  width,

  onChange = () => void 0,
  onFocus,
}) => {
  return (
    <div
      style={{
        width: width ? width + "px;" : "100%",
        padding: "1px 0",
      }}
    >
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={classNames(
          className,
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        )}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={onFocus}
      />
    </div>
  );
};
