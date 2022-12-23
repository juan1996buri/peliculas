import React from "react";
import { movies } from "../common/const";
import Card from "./Card";

const Movies = () => {
  return (
    <div className="flex-1 h-full overflow-y-scroll">
      {/* Portada */}
      <div className="rounded-2xl mb-4">
        <img
          src="https://i.blogs.es/4c3cf2/godofwarragnarok/1366_2000.jpeg"
          className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
        />
      </div>
      <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            img={movie.img}
            price={movie.price}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
