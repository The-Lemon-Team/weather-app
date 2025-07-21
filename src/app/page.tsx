"use server";

import { Autocomplete } from "@/components/molecules/Autocomplete";
import { BackgroundWrapper } from "@/components/atoms/BackgroundWrapper";
import { WeatherCard } from "@/components/molecules/WeatherCard";

export default async function Home() {
  return (
    <BackgroundWrapper>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <WeatherCard />
      <div className="mt-8 w-1/2">
        <Autocomplete />
      </div>
    </BackgroundWrapper>
  );
}
