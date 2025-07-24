import axios from "axios";

import { API_KEY, BASE_URL } from "@/constants";

import { IWeatherCurrent, IWeatherLocation } from "@/interfaces/IWeather";

export const weatherApi = {
  async searchAutocomplete(query: string): Promise<IWeatherLocation[]> {
    try {
      const res = await axios.get(`${BASE_URL}/search.json`, {
        params: {
          key: API_KEY,
          q: query,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return res.data;
    } catch {
      throw new Error("Failed to fetch autocomplete");
    }
  },

  async usingCurrent(query: string): Promise<IWeatherCurrent> {
    try {
      const res = await axios.get(`${BASE_URL}/current.json`, {
        params: {
          key: API_KEY,
          q: query,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return res.data;
    } catch {
      throw new Error("Failed to fetch current weather");
    }
  },
};
