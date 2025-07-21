import React from "react";
import classNames from "classnames";

import type { IAutocompleteItem } from "@/interfaces/IAutocompleteItem";

interface AutocompleteItemProps extends React.PropsWithChildren {
  item?: IAutocompleteItem;
  tabIndex: number;
  onSelect?: (item: IAutocompleteItem) => void;
  selected?: boolean;
}

export const AutocompleteItem: React.FC<AutocompleteItemProps> = ({
  item,
  tabIndex,
  onSelect,
  selected = false,
  children,
}) => (
  <div
    className={classNames(
      onSelect ? "cursor-pointer" : "",
      selected ? "bg-gray-100 dark:bg-neutral-800" : "",
      "py-1.5 px-0.5",
      "text-sm text-gray-800",
      "hover:bg-gray-100 focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
      `w-full rounded-lg focus:outline-hidden`
    )}
    role="option"
    tabIndex={tabIndex}
    aria-selected={selected}
    onClick={() => item && onSelect && onSelect(item)}
  >
    <div className="flex justify-between items-center w-full">
      <span>{item?.value || children}</span>
      {selected && (
        <span>
          <svg
            className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </span>
      )}
    </div>
  </div>
);
