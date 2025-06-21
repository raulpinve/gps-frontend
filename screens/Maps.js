import React from 'react';

const Maps = () => {
    return (
        <View style={styles.container}>
            <MapView
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
            </MapView>
        </View>
    );
};

export default Maps;