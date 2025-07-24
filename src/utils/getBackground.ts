/**
 * Utility to map weather condition strings to Tailwind background classes.
 */

const DEFAULT_BACKGROUND =
  "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600";

const backgroundMap: Map<string, string> = new Map([
  // clear
  ["Sunny", "bg-[url('/backgrounds/sunny.webp')]"],
  ["Clear", "bg-[url('/backgrounds/sunny.webp')]"],

  // cloudy
  ["Partly cloudy", "bg-[url('/backgrounds/cloudy.webp')]"],
  ["Cloudy", "bg-[url('/backgrounds/cloudy.webp')]"],
  ["Overcast", "bg-[url('/backgrounds/cloudy.webp')]"],

  // lightning
  [
    "Moderate or heavy rain with thunder",
    "bg-[url('/backgrounds/lightning.webp')]",
  ],
  ["Light rain", "bg-[url('/backgrounds/lightning.webp')]"],

  // mist
  ["Mist", "bg-[url('/backgrounds/foggy.webp')]"],
  ["Patchy freezing drizzle possible", "bg-[url('/backgrounds/snow.webp')]"],
  ["Fog", "bg-[url('/backgrounds/foggy.webp')]"],

  // rainy
  ["Patchy light drizzle", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Moderate or heavy rain shower", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Patchy rain possible", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Rain", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Heavy rain", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Thundery outbreaks possible", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Light drizzle", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Patchy light rain", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Moderate rain at times", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Moderate rain", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Heavy rain at times", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Light freezing rain", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Light rain shower", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Torrential rain shower", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Light sleet showers", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Moderate or heavy sleet showers", "bg-[url('/backgrounds/rainy.webp')]"],
  ["Patchy rain nearby", "bg-[url('/backgrounds/rainy.webp')]"],

  // frezzeing?
  ["Freezing fog", "bg-[url('/backgrounds/snow.webp')]"],
  ["Freezing drizzle", "bg-[url('/backgrounds/snow.webp')]"],
  ["Heavy freezing drizzle", "bg-[url('/backgrounds/snow.webp')]"],
  ["Moderate or heavy freezing rain", "bg-[url('/backgrounds/snow.webp')]"],
  ["Light showers of ice pellets", "bg-[url('/backgrounds/snow.webp')]"],
  [
    "Moderate or heavy showers of ice pellets",
    "bg-[url('/backgrounds/snow.webp')]",
  ],

  // snow bg
  ["Blowing snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Blizzard", "bg-[url('/backgrounds/snow.webp')]"],
  ["Light sleet", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy light snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Light snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy sleet possible", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy moderate snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Moderate snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy heavy snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Heavy snow", "bg-[url('/backgrounds/snow.webp')]"],
  ["Ice pellets", "bg-[url('/backgrounds/snow.webp')]"],
  ["Light snow showers", "bg-[url('/backgrounds/snow.webp')]"],
  ["Moderate or heavy snow showers", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy light snow with thunder", "bg-[url('/backgrounds/snow.webp')]"],
  ["Moderate or heavy snow with thunder", "bg-[url('/backgrounds/snow.webp')]"],
  ["Patchy snow possible", "bg-[url('/backgrounds/snow.webp')]"],
  ["Snow", "bg-[url('/backgrounds/snow.webp')]"],
]);
export const getBackgroundClass = (condition?: string): string => {
  if (!condition) {
    return DEFAULT_BACKGROUND;
  }
  return backgroundMap.get(condition) || DEFAULT_BACKGROUND;
};
