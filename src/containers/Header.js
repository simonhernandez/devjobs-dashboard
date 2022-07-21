import React from "react";
import { SwitchToggle } from "../components";

import {
  Logo,
  BgHeaderMobile,
  BgHeaderTablet,
  BgHeaderDesktop,
  IconMoon,
  IconSun,
} from "../constants/images";

const Header = ({ width }) => {
  return (
    <header className="bg-gradient-to-l from-violet via-violet relative px-6 pt-8 md:pt-11 h-[136px] md:h-[160px] lg:h-[162px] overflow-x-hidden">
      <div className="lg:max-w-[1110px] lg:mx-auto">
        <div className="absolute z-0 top-0 left-0 w-full">
          {width > 767 && width < 1024 ? (
            <BgHeaderTablet />
          ) : width > 1023 ? (
            <BgHeaderDesktop />
          ) : (
            <BgHeaderMobile />
          )}
        </div>
        <div className="flex justify-between items-start">
        <a href="/" className="relative">
          <Logo />
        </a>

        <div className="flex items-center gap-2 relative">
          <IconSun />
          <SwitchToggle />
          <IconMoon />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
