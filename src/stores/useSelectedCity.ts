import { create } from "zustand";

import { weatherApi } from "@/services/weatherApi";

import { IApiError } from "@/interfaces/IApiError";
import { IWeatherCard } from "@/interfaces/IApiResponse";

interface ISelectedCity {
  status: "idle" | "loading" | "success" | "error";
  selectedCity: IWeatherCard | null;
  error: IApiError | null;
  setSelectedCity: (query: string) => void;
}

export const useSelectedCity = create<ISelectedCity>()((set) => ({
  selectedCity: null,
  status: "idle",
  error: null,
  setSelectedCity: async (query: string) => {
    set(() => ({ status: "loading", error: null }));

    try {
      const selectedCity = await weatherApi.usingCurrent(query);
      const weatherCard: IWeatherCard = {
        city: selectedCity.location.name,
        country: selectedCity.location.country,
        temp: selectedCity.current.temp_c,
        condition: selectedCity.current.condition.text,
        feelsLike: selectedCity.current.feelslike_c,
        humidity: selectedCity.current.humidity,
        iconUrl: selectedCity.current.condition.icon,
      };

      set(() => ({
        status: "success",
        error: null,
        selectedCity: weatherCard,
      }));
    } catch (error) {
      console.error(error);
      set(() => ({ error: error as IApiError, status: "error" }));
    }
  },
}));
