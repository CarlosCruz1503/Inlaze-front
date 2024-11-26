"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


type Favorite = {
    idMovie: String,
    title: String,
    photo: String,
    favoriteId: String
} | null;

interface FavoriteContextType {
    favorite: Favorite;
    add: (favorite: Favorite) => void;
    remove: () => void;
    set: () => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favorite, setFavorite] = useState<Favorite>(null);
    
    useEffect(() => {
        const storedFavorite = localStorage.getItem('favorite');
        if (storedFavorite) {
            setFavorite(JSON.parse(storedFavorite));
        }
    }, []);

    const set = (favorites) => {
        setFavorite(favorites)
        localStorage.setItem('favorite', JSON.stringify(favorites))
    };

    const add = (favorite: Favorite) => {
        let temp = []
        const storedFavorite = localStorage.getItem('favorite');
        if (storedFavorite) {
            temp = JSON.parse(storedFavorite)
            temp.push(favorite)
            setFavorite(temp);
            localStorage.setItem('favorite', JSON.stringify(temp))
        }else{
            setFavorite([favorite]);
            localStorage.setItem('favorite', JSON.stringify([favorite]))
        }
        
    };
    const remove = (id) => {
        let temp = [];
        const storedFavorite = localStorage.getItem('favorite');
        if (storedFavorite) {
            console.log(id)
            temp = JSON.parse(storedFavorite);
            temp = temp.filter((x) => id != x?.idMovie); // Asigna el resultado de filter
            setFavorite(temp);
            localStorage.setItem('favorite', JSON.stringify(temp));
        }
    };

    return (
        <FavoriteContext.Provider value={{set, favorite, add, remove }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = (): FavoriteContextType => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within an FavoriteProvider');
    }
    return context;
};
