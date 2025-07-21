import { IWeatherLocation, IWeatherCurrent } from "./IWeather";

export interface IWeatherApi {
  searchAutocomplete(query: string): Promise<IWeatherLocation[]>;
  usingCurrent(query: string): Promise<IWeatherCurrent>;
}
