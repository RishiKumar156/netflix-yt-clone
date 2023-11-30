import React, { useState } from "react";
import { rowimageBaseUrl } from "../Requests";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieComp = ({ items }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`${rowimageBaseUrl}${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute text-white w-full h-full top-0 left-0 opacity-0 hover:opacity-100 bg-[black]/80 transition duration-300">
        <p className="font-bold w-full h-full flex items-center text-xs justify-center md:text-sm lg:text-xl xl:text-xl">
          {items?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute text-gray-400 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-400 top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieComp;
