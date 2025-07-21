import { weatherApi } from "../weatherApi";
import { IWeatherLocation, IWeatherCurrent } from "@/interfaces/IWeather";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("weatherApi", () => {
  it("searchAutocomplete returns locations", async () => {
    const mockLocations: IWeatherLocation[] = [
      { id: "1", name: "London", country: "UK", lat: 51.5, lon: -0.12 },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockLocations));

    const result = await weatherApi.searchAutocomplete("London");
    expect(result).toEqual(mockLocations);
    expect(fetchMock).toHaveBeenCalled();
  });

  it("usingCurrent returns current weather", async () => {
    const mockWeather: IWeatherCurrent = {
      location: {
        name: "London",
        country: "UK",
        lat: 51.5,
        lon: -0.12,
        localtime: "2023-01-01 12:00",
      },
      current: {
        temp_c: 20,
        temp_f: 68,
        condition: { text: "Sunny", icon: "//cdn.weatherapi.com/icon.png" },
        wind_kph: 10,
        humidity: 50,
        feelslike_c: 19,
        feelslike_f: 66,
      },
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockWeather));

    const result = await weatherApi.usingCurrent("London");
    expect(result).toEqual(mockWeather);
    expect(fetchMock).toHaveBeenCalled();
  });
});

{
  "env": {
    "jest": true
  }
}