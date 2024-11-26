
"use client";
import { useState, useEffect } from "react";
import { MoviesSearch, MoviesGenre, MovieForCategoryOrId } from "@/services/imdb";
import Button from "./ui/button";
import { useAuth } from '../../context/AuthContext';
import Search from '@/app/img/search.png';
import Image from "next/image";
import { toast } from 'react-hot-toast';
export default function FiltersSection({ setSearch }): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState<string>('');
    const [genres, setGenres] = useState<[]>([]);
    const { isLoggedIn, user } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            getMoviesGenre();
        }
    }, [isLoggedIn]);

    const getMoviesGenre = async () => {
        try {
            const genreTemp = await MoviesGenre({}, user?.token)
            console.log(genreTemp)
            setGenres(genreTemp?.data?.genres)
        } catch (e) {
            toast.error('Error filtrando por genero, porfavor vuelve a intentarlo');
            console.log(e)
        }
    }

    const search = async () => {
        setLoading(true);
        try {
            let search = await MoviesSearch({ 'query': query }, user?.token)
            setSearch(search?.data?.results)
            setLoading(false)
            setQuery('')
        } catch (e) {
            toast.error('Error filtrando en la busqueda, porfavor vuelve a intentarlo');
            setLoading(false)
        }
    };
    const searchWithCategory = async (id) => {
        setLoading(true);
        try {
            let search = await MovieForCategoryOrId('', { 'with_genres': id }, user?.token)
            setSearch(search?.data?.results)
            setLoading(false)
            setQuery('')
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    };
    return (
        <div className="w-full lg:w-1/6 lg:h-auto bg-gray-800 p-2">
            <div className="ml-1 my-8 ">
                <form className="max-w-sm mx-auto flex flex-col items-center justify-center">
                    <div className="flex rounded-lg w-5/6">
                        <input
                            type="text"
                            id="hs-search-box-with-loading-2"
                            name="hs-search-box-with-loading-2"
                            className="py-3 px-4 h-8 block  border-gray-200  rounded-s-lg text-sm bg-gray-700"
                            placeholder="Buscar"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            required />
                        <button
                            type="button"
                            onClick={search}
                            className="w-10 h-8 inline-flex justify-center items-center font-semibold rounded-e-md border border-transparent bg-blue-600"
                        >
                            {loading ? (
                                <span
                                    className="animate-spin  size-6 border-[3px] border-current border-t-transparent text-white rounded-full"
                                    role="status"
                                    aria-label="loading"
                                >
                                    <span className="sr-only text-xs">Loading...</span>
                                </span>
                            ) : (
                                <div className="flex items-center justify-center">
                                    <Image className=" max-w-4"
                                        src={Search}
                                        alt="" width={20} height={20}
                                    />
                                </div>
                            )}
                        </button>
                    </div>
                </form>
                <div className="mt-2  flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center mx-4">

                        <ul className="px-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex items-center justify-center">
                            {genres.map((genre) => {
                                return (
                                    <div className="flex items-center justify-center">
                                        <Button key={genre?.id} size="w-24" color={"bg-transparent"} border="border-solid border-2 border-yellow-500" px={"px-1"} py={"py-0"} text={genre?.name} click={() => {
                                            searchWithCategory(genre?.id)
                                        }}></Button>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}