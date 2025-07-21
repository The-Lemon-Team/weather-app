import axios from "axios";

import { API_KEY, BASE_URL } from "@/constants";

import { IWeatherCurrent } from "@/interfaces/IWeather";

console.log("API_KEY", API_KEY);

export const weatherApi = {
  async searchAutocomplete(query: string) {
    try {
      const res = await axios.get(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      return res.data;
    } catch {
      throw new Error("Failed to fetch autocomplete");
    }
  },

  async usingCurrent(query: string): Promise<IWeatherCurrent> {
    try {
      const res = await axios.get(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      return res.data;
    } catch {
      throw new Error("Failed to fetch current weather");
    }
  },
};
