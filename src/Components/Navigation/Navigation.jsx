import React, { useEffect, useState } from 'react'

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <div>
       <button
        className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 dark:text-gray-100"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
}

export default Navigation
