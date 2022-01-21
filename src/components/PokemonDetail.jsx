export const PokemonDetail = (props) => {
  return (
    <>
      {props.data === 404 && props.types.length === 0 ? (
        <p>Not Found</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center border-2 border-black dark:border-white rounded-xl mt-6 mx-2 md:mx-56">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div>
              <img
                className="w-[450px]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <div class="mt-2">
              <span class="uppercase font-bold text-xl mb-2 dark:text-amber-400">
                {props.name}
              </span>
            </div>
            <div class="pt-4 pb-2">
              {props.types?.map((element, index) => {
                return (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {element.type.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
