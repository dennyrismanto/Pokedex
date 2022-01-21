import { useEffect, useRef, useState } from "react";
import { useScroll } from "react-use";
import "./App.css";
import axios from "axios";
import { NavigationBar } from "./components/Navbar";
import { PokemonInfinityList } from "./components/PokemonInfinityList";
import { PokemonDetail } from "./components/PokemonDetail";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(data);

  const handleClick = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + search)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setData(error.response.status);
        }
      });
  };
  return (
    <>
      <div className="w-screen h-screen overflow-y-auto dark:bg-black">
        <NavigationBar />

        <div className="flex flex-col justify-center items-center mt-2 md:mt-2 mx-6">
          <div className="flex flex-row relative right-0 top-0 border-2 w-[120px]">
            <input
              className="w-[95px] focus:outline-none"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="absolute top-0 right-0 text-slate-400 h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => handleClick()}
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {search === "" ? (
            <PokemonInfinityList />
          ) : (
            <PokemonDetail
              data={data}
              name={data.name}
              id={data.id}
              types={data.types}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
