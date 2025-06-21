import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../helper/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
        loading: true
    }); 

    useEffect(() => {
        const loadUser = async () => {
            // Se obtiene el token guardado
            const token = await AsyncStorage.getItem("token");

            if(!token){
                setAuth({ isAuthenticated: false, user: null, token: null, loading: false })
                return;
            }

            try {
                const res = await api.get("/validateToken", {
                    headers: { Authorization: `Bearer ${token}`}
                })

                const user = res.data?.data;
                setAuth({
                    isAuthenticated: true,
                    user: user, 
                    token,
                    loading: false
                })
            } catch (error) {
                await AsyncStorage.removeItem("token");
                setAuth({ isAuthenticated: false, user: null, token: null, loading: false });
            }
        }
        loadUser();
    }, [])

    const login = async (username, password) => {
        const res = await api.post("/login", {username, password});
        const data = res?.data?.data;
        const token = res?.data.token;

        await AsyncStorage.setItem("token", token);

        setAuth({
            isAuthenticated: true, 
            user: data, 
            token, 
            loading: false
        })
    }

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        setAuth({ isAuthenticated: false, user: null, token: null, loading: false});
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}