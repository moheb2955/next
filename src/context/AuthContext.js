"use client"

// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { setCookie } from 'cookies-next';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[token,setToken]=useState(null);

    // Check if the user is already logged in (e.g., by checking session/refresh tokens)
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    // Log in the user
    const login = (userData) => {
        setCookie("TOKEN", token, {
            path: "/",
        });
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setToken(userData.data.token)
    };

    // Log out the user
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout,token ,setToken,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

