import React from "react";
import {HiMoon, HiSun} from "react-icons/hi";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {ThemeContext} from "./themeContext";

const Toggle = () => {
  const {theme, setTheme} = React.useContext(ThemeContext);

  return (
    <div tw="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiSun
          tw="text-white text-2xl cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <HiMoon
          tw="text-white text-2xl cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
};

export default Toggle;
