import { useEffect, useState } from "react";
import requests, { imageBaseUrl } from "../Requests";
import axios from "axios";
export default function Main() {
  const [Movies, setMovies] = useState([]);
  const movie = Movies[Math.floor(Math.random() * Movies.length)];
  useEffect(() => {
    const fetch_movies = async () => {
      const response = await axios.get(`${requests.landingMovies}`);
      setMovies(response.data.results);
    };
    fetch_movies();
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`${imageBaseUrl}${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute top-[20%] w-full p-4 md:p-8">
        <h1 className="text-white md:text-5xl text-3xl font-semibold">
          {movie?.title}
        </h1>
        <div className="my-4">
          <button className="border border-gray-300 px-5 py-2 bg-[lightgray] text-[black] mr-4">
            Play
          </button>
          <button className="border border-gray-300 px-5 py-2 text-[white]">
            Watch Later
          </button>
        </div>
        <p className="text-sm text-gray-400">Release: {movie?.release_date} </p>
        <p className="text-sm text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
          Release: {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
}
