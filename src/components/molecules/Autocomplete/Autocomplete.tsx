"use client";

import React from "react";

import { AutocompleteItem } from "@/components/atoms/AutocompleteItem";
import { Input } from "@/components/atoms/Input";

import { useAutocomplete } from "./useAutocomplete";

export const Autocomplete: React.FC = ({}) => {
  const {
    isLoading,
    error,
    status,
    items,
    wrapperRef,
    searchTerm,
    showList,

    handleOnSelect,
    handleSearchChange,
    handleOnFocus,
  } = useAutocomplete();

  return (
    <div id="hs-combobox-basic-usage" className="relative">
      <div className="relative">
        <Input
          type="text"
          role="combobox"
          aria-expanded={showList}
          onChange={handleSearchChange}
          onFocus={handleOnFocus}
          value={searchTerm}
          placeholder="Поиск населенного пункта"
        />
        <div
          className="absolute top-1/2 end-3 -translate-y-1/2"
          aria-expanded={showList}
          role="button"
        >
          <svg
            className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
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
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
          </svg>
        </div>
      </div>
      {showList && (!!items?.length || !!error || isLoading) && (
        <div
          ref={wrapperRef}
          className="absolute z-50 w-full max-h-72 p-1 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700"
          role="listbox"
        >
          {isLoading && (
            <AutocompleteItem tabIndex={1} key="loading">
              Загрузка...
            </AutocompleteItem>
          )}
          {status === "error" && (
            <AutocompleteItem tabIndex={1} key="error">
              Ошибка, перезагрузите страницу
            </AutocompleteItem>
          )}
          {status === "success" &&
            items.map((item, i) => (
              <AutocompleteItem
                tabIndex={i}
                onSelect={handleOnSelect}
                item={item}
                key={i}
              />
            ))}
        </div>
      )}
    </div>
  );
};
