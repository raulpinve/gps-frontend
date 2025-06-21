import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView className="flex-1 h-full bg-white">
            <Text>Bienvenido</Text>
            <Button title="Cerrar sesión" onPress={logout} />
             {/* <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 4.7110,       // Bogotá, Colombia (ejemplo)
                    longitude: -74.0721,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={{ latitude: 4.7110, longitude: -74.0721 }}
                    title="Estoy aquí"
                    description="Este es un marcador en Bogotá"
                />
            </MapView> */}
        </SafeAreaView>
    );
};

export default HomeScreen;