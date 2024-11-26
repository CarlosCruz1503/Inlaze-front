"use client";
import Button from "../ui/button";
import { useState } from "react";
import { useAuth } from '../../../context/AuthContext';
import { loginApi, registerApi } from "@/services/auth";
import { toast } from 'react-hot-toast';
import { ListFavoriteUser } from "@/services/favorite";
import { useFavorite } from "@/context/FavoriteContext";
export default function formAuth({ type, changeOpen }): JSX.Element {
    const [username, setUsername] = useState<string>(''); // Inicializado como string vacía
    const [password, setPassword] = useState<string>('');
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const { set } = useFavorite()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (type == 'Login') {
                try {
                    const user = await loginApi(username, password);
                    login(user);
                    const list = await ListFavoriteUser(user?.user?._id, user?.token)
                    set(list.data)
                    toast.success('Login exitoso');
                    console.log(user)
                    
                    changeOpen()
                    
                }catch(e){
                    toast.error(e?.message);
                }
            } else {
                try{
                    const user = await registerApi(username, password);
                login(user);
                toast.success('Registro exitoso');
                changeOpen()
                }catch(e){
                    toast.error(e?.message);
                }
            }

        } catch (error) {
            alert(error);
        }
    };

    return (
        <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700" placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>

            <Button text={
                type == 'Login'
                    ? 'Ingresar'
                    : 'Registrarme'
            } color='bg-yellow-500' type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">

            </Button>
        </form>



    );
}
