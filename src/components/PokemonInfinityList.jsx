import { useEffect, useRef, useState } from "react";
import { useScroll } from "react-use";
import axios from "axios";
export const PokemonInfinityList = (props) => {
  const [offset, setCount] = useState(0);
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);
  const currentHeight = useRef(null);
  const { y } = useScroll(scrollRef);
  const [search, setSearch] = useState("");
  const limit = 20;

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=` +
          offset +
          `& limit=` +
          limit
      )
      .then(function (response) {
        // handle success
        setData(data.concat(response.data.results));
      });
  }, [offset, search]);

  useEffect(() => {
    //On Scroll
    if (
      currentHeight?.current?.clientHeight <=
      y + document.body.offsetHeight + 2
    ) {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=` +
            offset +
            `& limit=` +
            limit
        )
        .then(function (response) {
          // handle success
          setData(data.concat(response.data.results));
        });
    }
  }, [y, currentHeight]);
  return (
    <>
      <div
        className="w-full md:w-[1200px] h-[600px] overflow-y-auto mt-4"
        ref={scrollRef}
      >
        {data.length === 0 ? (
          <p>Not Found</p>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-1"
            ref={currentHeight}
          >
            {data.map((element, index) => {
              return (
                <div key={index}>
                  <img
                    className="w-full"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt=""
                  />
                  <div className="px-6 py-4">
                    <div className="uppercase font-extrabold text-xl mb-2 dark:text-amber-400">
                      {element.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
