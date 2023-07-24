import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
    const storedTheme = window.localStorage.getItem("prefered-theme");
    const checkTheme = () => {
      if (storedTheme === "darkTheme") {
        return false;
      }
      return true;
    };

    const [isLight, setIsLight] = useState(checkTheme);
    
    const toggleTheme = () => {
        if (isLight) {
            setIsLight(false);
            window.localStorage.setItem("prefered-theme", "darkTheme");
        } else {
            setIsLight(true);
            window.localStorage.setItem("prefered-theme", "lightTheme");
        }
    }
    
    useEffect(() => {
      const setTheme = () => {
        const root = window.document.documentElement;
        const operatingSystemThemeDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        
        if (storedTheme === "darkTheme" && operatingSystemThemeDark.matches) {
          root.classList.add("dark");
        }
        if (storedTheme === "darkTheme") {
          root.classList.add("dark");
        }
        if (storedTheme === "lightTheme") {
          root.classList.remove("dark");
        }
      };
      setTheme();
    }, [storedTheme]);

  return (
    <button onClick={toggleTheme} className="z-10 absolute right-3 top-3 p-2 outline-none border-none text-slate-400 dark:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer">
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
