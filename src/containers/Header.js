import React, { useState, useEffect } from "react";
import { SwitchToggle } from "../components";

import {
  Logo,
  BgHeaderMobile,
  BgHeaderTablet,
  BgHeaderDesktop,
  IconMoon,
  IconSun,
  IconSearch,
  IconFilter,
} from "../constants/images";

const Header = ({ width }) => {
  return (
    <header className="bg-transparent relative px-6 pt-8 md:pt-11 h-[136px] md:h-[160px] lg:h-[162px] overflow-x-hidden">
      <div className="flex justify-between items-start">
        <div className="absolute z-0 top-0 left-0 w-full">
          {width > 767 && width < 1024 ? (
            <BgHeaderTablet />
          ) : width > 1023 ? (
            <BgHeaderDesktop />
          ) : (
            <BgHeaderMobile />
          )}
        </div>
        <a href="/" className="relative">
          <Logo />
        </a>

        <div className="flex items-center gap-2 relative">
          <IconSun />
          <SwitchToggle />
          <IconMoon />
        </div>
      </div>
    </header>
  );
};

export default Header;
