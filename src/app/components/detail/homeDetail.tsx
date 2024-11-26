"use client";

import Nav from "@/app/components/nav";
import HeaderDetail from "@/app/components/detail/headerDetail";
import { useAuth } from "../../../context/AuthContext";
import { MovieForCategoryOrId, MoviesIdFilter } from "@/services/imdb";
import { useState, useEffect, useCallback } from "react";
import { toast } from 'react-hot-toast';
export default function HomeDetail({ id }: { id: string }) {
  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [similar, setSimilar] = useState<any>(null);
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      getMovieDetail();
      getMovieSimilar()
    }
  }, [isLoggedIn]);

  const getMovieDetail = useCallback(async () => {
    try {
      const movieData = await MovieForCategoryOrId(id, {}, user?.token);
      setMovie(movieData?.data);
    } catch (e) {
      setError('Error trayendo el detalle de la pelicula, porfavor vuelve a intentarlo')
      toast.error('Error trayendo el detalle de la pelicula, porfavor vuelve a intentarlo');
      console.error("Error fetching movie details:", e);
    }
  }, [id, user?.token]);

  const getMovieSimilar = useCallback(async () => {
    try {
      const similarData = await MoviesIdFilter(`${id}/similar`, {}, user?.token);
      console.log(similarData)
      setSimilar(similarData?.data.results);
    } catch (e) {
      toast.error('Error trayendo las peliculas similares, porfavor vuelve a intentarlo');
      console.error("Error fetching similar details:", e);
    }
  }, [id, user?.token]);

  if (!isLoggedIn) {
    return <div className="w-screen h-screen bg-gray-900">
      <div className="flex items-center justify-center">
        <p className="text-center"></p>
      </div>
    </div>;
  }

  return (
    <>
      <Nav />
      {movie ? (
        <HeaderDetail data={movie} similar={similar} />
      ) : (
        <div className="w-screen h-screen bg-gray-900"> {error ? error : 'Cargando detalles de la pelicula'}</div>
      )}
    </>
  );
}
