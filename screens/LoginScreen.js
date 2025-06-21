import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "../global.css"
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
    const [username, setUsername] = useState("raulpinve");
    const [password, setPassword] = useState("3114221048RaDa*");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        if (username.trim() === "" || password.trim() === "") {
            setError("Debe completar los campos.");
            setLoading(false);
            return;
        }
        try {
            await login(username, password); // usa la función del contexto
        } catch (error) {
            setError("Login fallido.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView className="flex-1 h-full bg-white p-8">
            <Text className="text-xl font-semibold text-center mb-6">Iniciar sesión</Text>

            {/* Username */}
            <View className="mb-4">
                <Text className="text-sm text-gray-700 mb-1 font-semibold">Usuario</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Escribe tu usuario"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            {/* Contraseña */}
            <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1">Contraseña</Text>
                <TextInput
                    className="border border-gray-300 rounded px-3 py-2"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>

            {error && (<Text className="bg-red-600 text-white rounded-xl px-4 p-2 mb-4 font-semibold">
                {error}
            </Text>)}

            <TouchableOpacity
                disabled={loading}
                className={`p-3 rounded-xl text-center ${
                    loading ? 'bg-gray-400' : 'bg-blue-600'
                }`}
                onPress={() => handleLogin()}
            >
                <Text 
                    className=" text-white text-center font-bold"
                >   {loading ? 'Cargando...' : 'Iniciar sesión'} </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginScreen;