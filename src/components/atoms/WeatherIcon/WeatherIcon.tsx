import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiShowers,
  WiSleet,
  WiStrongWind,
  WiNa,
} from "react-icons/wi";

export type WeatherCondition =
  | "clear"
  | "clouds"
  | "rain"
  | "snow"
  | "thunderstorm"
  | "fog"
  | "night"
  | "day-cloudy"
  | "night-cloudy"
  | "showers"
  | "sleet"
  | "wind"
  | "unknown";

interface WeatherIconProps {
  condition: WeatherCondition | string;
  size?: number;
  className?: string;
}

// Вынес iconMap за пределы компонента
const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  clear: WiDaySunny,
  clouds: WiCloud,
  cloudy: WiCloud,
  rain: WiRain,
  snow: WiSnow,
  thunderstorm: WiThunderstorm,
  fog: WiFog,
  night: WiNightClear,
  "day-cloudy": WiDayCloudy,
  "night-cloudy": WiNightAltCloudy,
  showers: WiShowers,
  sleet: WiSleet,
  wind: WiStrongWind,
  unknown: WiNa,
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  condition,
  size = 48,
  className,
}) => {
  const cond = (condition || "").toLowerCase();
  const IconComponent = iconMap[cond] || iconMap["unknown"];

  return <IconComponent size={size} className={className} />;
};

export default WeatherIcon;
