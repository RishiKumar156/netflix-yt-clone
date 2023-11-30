import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieComp from "./MovieComp";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export default function Row({ title, fetchUrl, rowid }) {
  const [Movie, setMovies] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setMovies(response.data.results);
    };
    fetch_data();
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowid);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowid);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="rounded-full opacity-50 hover:opacity-100 bg-white left-0 transition duration-300 hidden group-hover:block absolute cursor-pointer z-10"
          size={40}
        />
        <div
          id={"slider" + rowid}
          className="w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap relative scroll-smooth"
        >
          {Movie.map((items, id) => (
            <MovieComp key={id} items={items} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="rounded-full opacity-50 hover:opacity-100 bg-white right-0 transition duration-300 hidden group-hover:block absolute cursor-pointer z-10"
          size={40}
        />
      </div>
    </>
  );
}
