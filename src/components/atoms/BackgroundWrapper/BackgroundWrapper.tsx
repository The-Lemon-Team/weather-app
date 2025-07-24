"use client";

import React from "react";
import type { PropsWithChildren } from "react";
import classNames from "classnames";

import { useSelectedCity } from "@/stores/useSelectedCity";
import { getBackgroundClass } from "@/utils/getBackground";

export const BackgroundWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { selectedCity } = useSelectedCity();
  const background = getBackgroundClass(selectedCity?.condition);

  return (
    <div
      className={classNames(
        background,
        `
                flex flex-col items-center justify-center
                min-h-screen w-full
                bg-center bg-cover bg-no-repeat bg-fixed
                transition-all duration-1000 ease-in-out
                bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 antialiased
                relative
              `
      )}
    >
      {children}
    </div>
  );
};
