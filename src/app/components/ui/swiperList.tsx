"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from "../ui/movieCard";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function SwiperList({ data }): JSX.Element {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1080: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },

                1280: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data ?
                data.length > 0 ? data.map((movie) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <MovieCard  data={movie}></MovieCard>
                        </SwiperSlide>
                    );
                }) :
                    <></>
                :
                <></>}


        </Swiper>
    )
}