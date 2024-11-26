'use client'
import Image from "next/image";
import Heart from '@/app/img/heart.png';
import RedHeart from '@/app/img/red-heart.png';
import { useState, useEffect } from "react";
import { AddFavorite, removeFavorite } from "@/services/favorite";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import { useFavorite } from "../../../context/FavoriteContext";
export default function Favorite({ size = 'max-w-18', movie = null }): JSX.Element {
    const { user } = useAuth();
    const { favorite, add, remove } = useFavorite();
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        if (favorite && favorite.length > 0) {
            for (let f of favorite) {
                if (f?.idMovie == movie?.id) {
                    setIsFavorite(true)
                }
            }
        }

    }, [favorite])

    const AddFavoriteFunction = async () => {
        try {
            const favorite = {
                idMovie: movie?.id,
                title: movie?.title,
                photo: movie?.poster_path,
                userId: user?.user._id
            }
            const created = await AddFavorite(favorite, user?.token)
            add(favorite)
            setIsFavorite(true)
            toast.success(created.message)
        } catch (e) {
            toast.error(e.message)
        }
    }
    const RemoveFavoriteFunction = async () => {
        try {
            const deleted = await removeFavorite(movie?.id,user?.user._id, user?.token)
            remove(movie?.id)
            setIsFavorite(false)
            toast.success(deleted.message)
        } catch (e) {
            toast.error(e.message)
        }
    }

    return (
        <div>
            {
                isFavorite
                    ?
                    <Image
                        className={`${size}`}
                        width={20}
                        height={20}
                        onClick={RemoveFavoriteFunction}
                        src={RedHeart}
                        alt="x"
                    />
                    :
                    <Image
                        className={`${size}`}
                        width={100}
                        height={100}
                        onClick={AddFavoriteFunction}
                        src={Heart}
                        alt="x"
                    />
            }
        </div>
    );
}
