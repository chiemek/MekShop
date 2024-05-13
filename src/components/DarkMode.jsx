import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // set theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); //access to html element
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 transistion-all duration-300 ${
          theme == "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img src={DarkButton} alt="" className={`w-12 cursor-pointer `} />
    </div>
  );
};

export default DarkMode;
