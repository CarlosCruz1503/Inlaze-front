"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


type User = {
    name: string;
    email: string;
} | null;

interface AuthContextType {
    user: User;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (user: any) => {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null)
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
