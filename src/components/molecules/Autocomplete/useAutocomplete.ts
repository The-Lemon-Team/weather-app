import { useCallback, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { useSelectedCity } from "@/stores/useSelectedCity";
import { throttle } from "@/utils/throttle";

import { useSearch } from "./useSearch";

import { IAutocompleteItem } from "@/interfaces/IAutocompleteItem";

export const useAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setSelectedCity, selectedCity } = useSelectedCity();
  const {
    status,
    items: searchItems,
    error,
    search: searchWeather,
  } = useSearch();

  const isLoading = status === "loading";

  const items: IAutocompleteItem[] = useMemo(
    () =>
      searchItems?.map((item) => ({
        id: item.id,
        value: `${item.name}, ${item.country}, ${item.region}`,
      })) || [],
    [searchItems]
  );
  const search = throttle(searchWeather, 1000);
  const handleOnSelect = useCallback(
    (item: IAutocompleteItem) => {
      const selected = searchItems?.find((apiItem) => apiItem.id === item.id);

      if (selected) {
        setSearchTerm(item.value);
        setSelectedCity(item.value);
        setShowList(false);
      }
    },
    [searchItems, setSearchTerm, setSelectedCity]
  );
  const handleSearchChange = (payload: string) => {
    setSearchTerm(payload);

    if (payload.length > 2) {
      search(payload);
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  const handleOnFocus = () => {
    if ((items.length > 0 || isLoading || error) && searchTerm.length > 2) {
      setShowList(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useOnClickOutside(wrapperRef as any, () => setShowList(false));

  return {
    isLoading,
    status,
    error,
    items,
    wrapperRef,
    searchTerm,
    showList,
    selectedCity,

    handleOnSelect,
    handleSearchChange,
    handleOnFocus,
  };
};
