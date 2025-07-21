import { create } from "zustand";

import { weatherApi } from "@/services/weatherApi";

import type { IApiAutocompleteResponseItem } from "@/interfaces/IApiResponse";
import type { IApiError } from "@/interfaces/IApiError";

interface ISearch {
  status: "idle" | "loading" | "success" | "error";
  items: IApiAutocompleteResponseItem[] | null;
  error: IApiError | null;

  search: (query: string) => void;
}

export const useSearch = create<ISearch>()((set) => ({
  status: "idle",
  items: null,
  error: null,
  search: async (query: string) => {
    set(() => ({ status: "loading", error: null }));
    try {
      const items = await weatherApi.searchAutocomplete(query);

      console.log("items", items);

      set(() => ({ status: "success", error: null, items }));
    } catch (error) {
      set(() => ({ error: error as IApiError, status: "error" }));
    }
  },
}));
