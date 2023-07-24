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
  };

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
    <button
      onClick={toggleTheme}
      className="z-10 absolute bottom-6 right-12 md:bottom-auto md:right-3 md:top-3 p-2 outline-none border-none text-xs text-gray-900 dark:text-neutral-50 md:text-slate-400 md:dark:text-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer flex flex-row items-center gap-3"
    >
      {isLight ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 hidden md:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3 h-3 flex md:hidden"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 hidden md:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3 h-3 flex md:hidden"
          >
            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
          </svg>
        </div>
      )}
      <span className="flex md:hidden text-xs">
        {isLight ? "Toggle Dark Theme" : "Toggle Light Theme"}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
