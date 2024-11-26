"use client";
import Image from "next/image";
import Link from "next/link";
import CardAuth from "./auth/cardAuth";
import { useAuth } from '../../context/AuthContext';
import notLogin from '@/app/img/not-login.png';
import logo from '@/app/img/logo.png';
import logged from '@/app/img/logged.png';
import { useState, useCallback, useEffect } from "react";
import { toast } from 'react-hot-toast';
export default function Nav(): JSX.Element {

  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      setOpen(false)
    }else{
      setOpen(true)
    }
  }, [isLoggedIn]);

  const changeOpen = (state='') => {
    if(state='close'){
      setOpen(false)
    }else{
      setOpen(prevOpen => !prevOpen);
    }

  };

  const clickChangeOpen = useCallback(() => {

    if (isLoggedIn) {
      setOpen(prevOpen => !prevOpen);
    } else {
      toast.error('Debes registrarte o loguearte para usar la plataforma')
    }

  }, [open]);


  return (
    <div className="w-full flex bg-black h-16">
      {open
        ?
        <CardAuth changeOpen={changeOpen}></CardAuth>
        :
        <></>}
      <div className="w-1/2 bg-dark h-16">
        <ul className="flex h-16 justify-center align-center">
          <li className="hidden md:flex px-16 h-16 justify-center items-center">
            <Link href="/" className="max-w-36">
              <Image
                src={logo}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </Link>
          </li>
          <li className="flex h-16 justify-center items-center">
            <Link href="/" >
              <p className="text-center">Popular</p>
            </Link>
          </li>
          <li className="flex h-16 justify-center items-center">
            <Link href="/" >
              <p className="text-center">Favorites</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/2 bg-dark flex items-center justify-end">
        <div className="max-w-8 mr-8">
          <Image
            onClick={clickChangeOpen}
            src={isLoggedIn ? logged : notLogin}
            width={10}
            height={10}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
