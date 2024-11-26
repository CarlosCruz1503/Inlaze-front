"use client";

import Button from "../ui/button";
import loginPerson from '@/app/img/login-person.png';
import Image from 'next/image';
import FormAuth from "./formAuth";
import { useState, useCallback, useEffect } from "react";
import { useAuth } from '../../../context/AuthContext';
import { useFavorite } from '../../../context/FavoriteContext';
const IMDB_IMAGES = process.env.NEXT_PUBLIC_IMDB_IMAGES
export default function CardAuth({ changeOpen }): JSX.Element {

    const [loginOrRegister, setLoginOrRegister] = useState('Login');
    const { isLoggedIn, user, logout } = useAuth();
    const { set, favorite } = useFavorite()
    useEffect(() => {
        if (isLoggedIn) {
            console.log('Datos recargados tras login');
        }
    }, [isLoggedIn, favorite]);
    const changeOpenExecute = () => {
        changeOpen()
    }
    const login = useCallback(() => {
        console.log('Register clicked');
        setLoginOrRegister('Login');
    }, []);

    const register = useCallback(() => {
        console.log('Register clicked');
        setLoginOrRegister('Register');
    }, []);

    const registerEmail = useCallback(() => {
        console.log('Register clicked');
        setLoginOrRegister('RegisterEmail');
    }, []);

    const logOutFunction = useCallback(() => {
        logout()
        set([])
    }, []);

    return (
        <div className="absolute top-12 p-4 lg:p-8 h-5/6 w-screen z-50">
            <div className="h-full lg:h-5/6 bg-slate-500/70 backdrop-blur-sm relative rounded-md">

                {
                    isLoggedIn
                        ? (
                            <>
                                <div className="flex h-full flex-col items-center justify-center">
                                    <h5 className="text-center text-wrap">Email: {user?.user?.email}</h5>
                                    {
                                        favorite && favorite?.length > 0
                                            ?
                                            <div>
                                                <h4 className="text-center">Peliculas que te gustan</h4>

                                                <div className="flex justify-center items-center grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 ">
                                                    {
                                                        favorite.map((movie) => {
                                                            return (
                                                                <div className="flex justify-center items-center flex-col ">
                                                                    <p className="text-center">{movie.title}</p>
                                                                    <Image className="rounded-t-lg max-w-14 md:max-w-24 lg:max-w-36 xl:max-w-48"
                                                                        src={`${IMDB_IMAGES}${movie.photo}`}
                                                                        alt="" width={30} height={30}
                                                                    />
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <h5 className="text-center">
                                                    Opps, aún no has elegido peliculas que te gustan
                                                </h5>
                                            </>
                                    }
                                    <Button size="max-w-32 mt-16" text={'Log Out'} color={'bg-red-800'} click={logOutFunction}></Button>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <div className="absolute inset-0 flex items-center justify-center w-full">
                                    <div className="w-full p-4 md:p-0 md:w-3/5 h-full flex flex-col items-center justify-center">
                                        <div className="flex flex-col md:flex-row items-center justify-center lg:px-48 md:px-16 gap-4">

                                            <Button text={'Sing Up'} color={loginOrRegister == 'RegisterEmail' || loginOrRegister == 'Register' ? 'bg-yellow-500' : 'bg-gray-600'} click={registerEmail}></Button>
                                            <Button text={'Log In'} color={loginOrRegister == 'Login' ? 'bg-yellow-500' : 'bg-gray-600'} click={login}></Button>
                                        </div>
                                        {loginOrRegister == 'RegisterEmail' ?
                                            (
                                                <div>
                                                    <div className="mt-20 px-32">
                                                        <Button text={'Register with your Email'} color={'bg-yellow-500'} click={register}></Button>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
                                                    <FormAuth type={loginOrRegister} changeOpen={changeOpen}></FormAuth>
                                                </div>
                                            )
                                        }
                                        <div className="mt-20 px-8" >
                                            <p className="text-center" style={{ fontSize: '0.85rem', textWrap: 'wrap' }}>For any questions, reach out to support@Quickbetdmovies.com</p>
                                        </div>
                                    </div>
                                    <div className="hidden w-2/5 h-full lg:flex items-center relative justify-center bg-black py-2">
                                        <div className="flex flex-col items-start ">
                                            <div className="h-3/5 top-0 absolute mt-8">
                                                <h3 className="text-center">Welcome to Quickbet Movies!</h3>
                                                <p className="text-center text-sm">
                                                    Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!
                                                </p>
                                            </div>
                                            <div className=" flex items-center justify-center  shrink-0 h-2/5 max-w-1/4">
                                                <Image
                                                    src={loginPerson}
                                                    alt="Cover Image"
                                                    className="mx-auto bottom-0 absolute"
                                                    style={{ maxWidth: "500px" }}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                }
            </div>
        </div>

    );
}
