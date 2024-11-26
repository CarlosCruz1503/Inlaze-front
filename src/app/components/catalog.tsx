'use client'
import MoviesSection from "./moviesSection";
import FiltersSection from "./filtersSection"
import { useState, useEffect } from "react";
import { MovieForCategoryOrId } from "@/services/imdb";
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
export default function Catalog(): JSX.Element {

    const [popular, setPopular] = useState([])
    const [now_playing, setNowPlaying] = useState([])
    const [upcoming, setUpComing] = useState([])
    const [top_rated, setTopRated] = useState([])
    const [search, setSearch] = useState([])
    const { isLoggedIn, user } = useAuth();
    useEffect(() => {
        if (isLoggedIn) {
            getPopularMovies()
            getNowPlayingMovies()
            getUpComingMovies()
            getTopRatedMovies()
        }

    }, [isLoggedIn]);

    const getPopularMovies = async () => {
        try {
            let popular = await MovieForCategoryOrId('popular', {}, user?.token)
            setPopular(popular?.data?.results)
            console.log(popular)
        } catch (e) {
            toast.error('Error trayendo las peliculas populares, porfavor vuelve a intentarlo');
            console.log(e)
        }
    }

    const getNowPlayingMovies = async () => {
        try {

            let now_playing = await MovieForCategoryOrId('now_playing', {}, user?.token)
            setNowPlaying(now_playing?.data?.results)
            console.log(now_playing)
        } catch (e) {
            toast.error('Error trayendo las peliculas más vistas, porfavor vuelve a intentarlo');
            console.log(e)
        }
    }

    const getUpComingMovies = async () => {
        try {

            let upcoming = await MovieForCategoryOrId('upcoming', {}, user?.token)
            setUpComing(upcoming?.data?.results)
            console.log(upcoming)
        } catch (e) {
            toast.error('Error trayendo las peliculas proximas a estrenarse, porfavor vuelve a intentarlo');
            console.log(e)
        }
    }

    const getTopRatedMovies = async () => {
        try {

            let top_rated = await MovieForCategoryOrId('top_rated', {}, user?.token)
            setTopRated(top_rated?.data?.results)
            console.log(top_rated)
        } catch (e) {
            toast.error('Error trayendo las peliculas mejor punteadas, porfavor vuelve a intentarlo');
            console.log(e)
        }
    }
    return (
        <div className="w-full lg:flex">
            <FiltersSection setSearch={setSearch} ></FiltersSection>
            <MoviesSection setSearch={setSearch} search={search} popular={popular} now_playing={now_playing} upcoming={upcoming} top_rated={top_rated} ></MoviesSection>
        </div>
    );
}
