import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import  client  from "../utils/gptai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const fecthMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;

  };
  const handleGptSearch = async () => {

    const gptQuery = "Pretend to be a movie recommendation system and suggest movies for the query : " + searchText.current.value + "only give me names of 5 movies, comma seperated like exmaple : movie1, movie2, movie3, movie4, movie5";  
    const gptSearchResult = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o",
    });
    const gptMovies = gptSearchResult.choices[0]?.message?.content?.split(",");  
    
    const promiseArray = gptMovies.map((movie) => fecthMovies(movie));  
    const tmbdResults = await Promise.all(promiseArray);
    console.log(tmbdResults);
    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmbdResults}));
  };

  
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center">
      <form
        className="flex gap-4 bg-black p-6 rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="w-[400px] p-4 text-black bg-white border border-gray-500 rounded-lg placeholder-gray-600 outline-none focus:border-gray-800"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="px-6 py-3 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-md"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
