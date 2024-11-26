"use client";
import Image from "next/image";
import Percentage from "../ui/percentaje";
import Favorite from "../ui/favorite";
import Button from "../ui/button";
import SwiperList from "../ui/swiperList";
const IMDB_IMAGES = process.env.NEXT_PUBLIC_IMDB_IMAGES
export default function HeaderDetail({ data, similar }): JSX.Element {

    const backgroundImageStyle = {
        backgroundImage:
            `url(${`${IMDB_IMAGES}${data?.backdrop_path}`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
    };
    console.log(data)
    return (
        <div className="h-auto">
            <div className="w-full md:h-3/5 flex flex-col md:flex-row " style={backgroundImageStyle}>
                <div className="w-full md:w-2/5">
                    <div className="w-full flex justify-center items-center pl-8 my-4">
                        <Image
                            src={`${IMDB_IMAGES}${data?.poster_path}`}
                            alt="Cover Image"
                            className=""
                            style={{ maxWidth: "400px" }}
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
                <div className="w-full md:w-3/5 p-8">

                    <div className="flex flex-col mt-2">
                        <h2 className="text-7xl">{data?.title}</h2>
                        <div className="flex justify-between mt-4">
                            <h4 className="text-slate-500">{data?.release_date}</h4>
                            <h4 className="text-slate-500">{data?.runtime}m</h4>
                        </div>
                    </div>
                    <h1 className="mt-4">Overview:</h1>
                    <h5>{data?.overview}</h5>
                    <div className="flex w-full justify-between  mt-6">
                        <div className="flex max-h-36 max-w-72 mt-6">
                            <Percentage size={24} value={(data?.vote_average * 10).toFixed(2)}>
                            </Percentage>
                            <div className="flex flex-col items-start justify-center">
                                <h3>User</h3>
                                <h3>Score</h3>
                            </div>
                        </div>
                        <div className="flex justify-end items-center max-w-48">
                            <Favorite movie={data}></Favorite>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <div className="flex justify-center items-center">
                            <div className="w-4/5">
                                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                                    {data?.genres
                                        ?
                                        data.genres.map((genre) => {
                                            return (
                                                <Button key={genre} px={'px-2'} color={"bg-transparent"} border="border-solid border-2 border-yellow-500" text={genre.name}></Button>
                                            )
                                        })
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-16 px-8 py-2 ">
                <h2>Recomendations</h2>
                <SwiperList data={similar}>

                </SwiperList>
            </div>

        </div>
    )
}