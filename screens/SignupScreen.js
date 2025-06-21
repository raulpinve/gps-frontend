import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignupScreen = () => {
    return (
        <SafeAreaView className="flex-1 h-full p-8">
            <Text className="text-xl font-semibold text-center mb-6">Crear cuenta</Text>

            {/* Primer nombre */}
            <View className="mb-6">
                <Text className="text-sm text-gray-700 mb-1 font-semibold">Primer nombre</Text>
                <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Escribe tu nombre"
                />
            </View>

            {/* Apellidos */}
            <View className="mb-6">
                <Text className="text-sm text-gray-700 mb-1 font-semibold">Apellidos</Text>
                <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Escribe tu nombre"
                />
            </View>

            {/* Username */}
            <View className="mb-6">
                <Text className="text-sm text-gray-700 mb-1 font-semibold">Username</Text>
                <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Escribe tu nombre"
                />
            </View>

            {/* Contraseña */}
            <View className="mb-6">
                <Text className="text-sm font-medium text-gray-700 mb-1">Contraseña</Text>
                <TextInput
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Ingresa tu contraseña"
                secureTextEntry={true}
                />
            </View>

            {/* Repetir contraseña */}
            <View  className="mb-6">
                <Text className="text-sm font-medium text-gray-700 mb-1">Contraseña</Text>
                <TextInput
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Repetir contraseña"
                secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
                className="bg-blue-600 p-3 rounded-xl text-center"
            >
                <Text 
                className=" text-white text-center font-bold"
                onPress={() => { alert("Hola")}}
                >Registrarse</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignupScreen;