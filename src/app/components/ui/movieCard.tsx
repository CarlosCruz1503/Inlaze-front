import Image from "next/image";
import Percentage from "./percentaje";
import Favorite from "./favorite";
import Link from 'next/link';
const IMDB_IMAGES = process.env.NEXT_PUBLIC_IMDB_IMAGES
export default function MovieCard({ data }): JSX.Element {
    return (

        <div className="max-w-sm bg-white max-w-12 lg:max-w-54 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/detail/${data?.id}`} className="flex items-center justify-center">

                    <Image className="rounded-t-lg max-w-48"
                        src={`${IMDB_IMAGES}${data?.poster_path}`}
                        alt="" width={100} height={100}
                    />
                
            </Link>
            <div className="p-2">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title}</h5>
                </a>
                <p className=" font-normal text-gray-700 dark:text-gray-400">{data?.release_date}</p>
            </div>
            <div className="flex items-center justify-center mb-3">

                <div className="grid grid-cols-2 ">
                    <div className=""><p className="text-center">Favorites</p></div>
                    <div className=""><p className="text-center">Rating</p></div>
                    <div className="flex items-center justify-center">
                        <Favorite movie={data}></Favorite>
                    </div>
                    <div className="flex items-center justify-center">
                        <Percentage size="16" value={(data?.vote_average * 10).toFixed(1)}></Percentage>
                    </div>
                </div>
            </div>
        </div>

    )
}