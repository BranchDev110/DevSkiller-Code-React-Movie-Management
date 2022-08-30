import React, { useState } from 'react';

import { MovieCard } from './MovieCard';
import { AddMovieButton } from './AddMovieButton';
import { AddMovieForm } from './AddMovieForm';
import { Card } from 'shared/components';

import { useMovies } from './MovieProvider';

type NewMovieMode = "BUTTON" | "FORM"

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] = useState('button');

  // TODO: Display list of movies
  const handleAddMovie = (movie: Record<"imageUrl" | "title" | "subtitle" | "description", string>) => {
    moviesDispatch({
      type: 'add',
      payload: {
        movie
      }
    });
    setDisplayOptionType('button');
  };
  
  return (
    <div className="card-deck">
      {movies.map(movie => (
        <Card key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Card>      
      ))}
      <Card>
        {displayOptionType === "button" && (
          <AddMovieButton onClick={() => setDisplayOptionType("form")} />
        )}
        {displayOptionType === "form" && (
          <AddMovieForm
            onSubmit={handleAddMovie}
            onCancel={() => setDisplayOptionType("button")}
          />
        )}
      </Card>
    </div>
  );
}
