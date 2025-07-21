"use client";

import React from "react";
import Image from "next/image";
import { FiNavigation } from "react-icons/fi";

import { useSelectedCity } from "@/stores/useSelectedCity";

export const DefaultcardContent = () => {
  return (
    <div
      className="
      flex flex-col items-center justify-center text-center
      min-h-[340px]"
    >
      <h2 className="text-3xl font-bold mb-4">Прогноз погоды</h2>

      <FiNavigation className="text-8xl text-white/50 my-4" size={52} />

      <p className="text-md text-white/70">
        Введите название города в строке поиска, чтобы начать.
      </p>
    </div>
  );
};

export function WeatherCard() {
  const { selectedCity } = useSelectedCity();

  return (
    <div
      className={`
        flex flex-col items-center justify-center text-center
        backdrop-blur-md bg-white/20
        rounded-xl shadow-lg
        p-8 text-white max-w-md mx-auto border border-white/20 shadow-2xl`}
    >
      {selectedCity ? (
        <>
          <h1 className="text-4xl font-bold">
            {selectedCity.city}, {selectedCity.country}
          </h1>
          <p className="text-8xl font-thin my-4">
            {Math.round(selectedCity.temp)}°C
          </p>
          <div className="flex items-center justify-center mb-6">
            <Image
              src={"https:" + selectedCity.iconUrl}
              alt={selectedCity.condition}
              width={48}
              height={48}
            />
            <p className="text-xl ml-4">{selectedCity.condition}</p>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p>Ощущается: {Math.round(selectedCity.feelsLike)}°C</p>
            <p>Влажность: {selectedCity.humidity}%</p>
          </div>
        </>
      ) : (
        <DefaultcardContent />
      )}
    </div>
  );
}
