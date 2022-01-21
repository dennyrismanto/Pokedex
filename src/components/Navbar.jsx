import { useState } from "react";

export const NavigationBar = (props) => {
  const [theme, setTheme] = useState(true);
  const handleClick = () => {
    if (theme === true) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center h-[100px] hover:border-indigo-400 border-4 border-blue-500 sticky inset-x-0 top-0 bg-blue-500">
        <img
          src="https://raw.githubusercontent.com/dennyrismanto/Pokedex/main/src/pokemon.png"
          alt=""
        />
        <div className="absolute top-8 right-2 md:top-8 md:right-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
            <input
              onClick={() => handleClick()}
              onChange={(e) => setTheme(!theme)}
              value={theme}
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              for="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
};
