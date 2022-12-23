import React from "react";
import { useLocation } from "react-router-dom";
import { movies } from "../common/const";

const MovieInformation = () => {
  const localitation = useLocation();
  const movieId = localitation.pathname.split("/")[1];

  return (
    <div>
      {movies
        .filter((item) => item.id == movieId)
        .map((item, index) => (
          <div className="text-white" key={index}>
            <img src={item.img} />
          </div>
        ))}
    </div>
  );
};

export default MovieInformation;
