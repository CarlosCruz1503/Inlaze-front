"use client";

import SwiperList from "./ui/swiperList";
import Back from '@/app/img/back.png';
import Image from "next/image";
export default function MoviesSection({ setSearch, search, popular, now_playing, upcoming, top_rated }): JSX.Element {

    const cleanSearch = () => { 
        setSearch([])
    }
    return (
        <div className="bg-gray-900 lg:w-5/6 w-full">
            {
                search
                    ?
                    search.length > 0
                        ?
                        (
                            <div>
                                <div className="px-8 pt-8">
                                    <div className="flex justify-center items-center gap-4">
                                        <Image className="rounded-t-lg max-w-12 m-2"
                                            src={Back}
                                            onClick={cleanSearch}
                                            alt="" width={100} height={100}
                                        />
                                        <h2>Busqueda</h2>
                                    </div>

                                    <SwiperList data={search}></SwiperList>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                <div className="px-8 pt-8">
                                    <h2>Popular</h2>
                                    <SwiperList data={popular}></SwiperList>
                                </div>
                                <div className="px-8 py-2">
                                    <h2>Now Playing</h2>
                                    <SwiperList data={now_playing}></SwiperList>
                                </div>
                                <div className="px-8 py-2">
                                    <h2>Top Rated</h2>
                                    <SwiperList data={upcoming}></SwiperList>
                                </div>
                                <div className="px-8 py-2">
                                    <h2>Upcoming</h2>
                                    <SwiperList data={top_rated}></SwiperList>
                                </div>
                            </>
                        )
                    : <></>
            }

        </div>
    );
}
