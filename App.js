import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider, AuthContext } from './context/AuthContext.js';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
	const { auth } = useContext(AuthContext);
	
	if(auth.loading) return <View style={{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}}>
		<ActivityIndicator size="large" color="#0000ff" />
	</View>
  	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{auth.isAuthenticated ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Navigator>
      </NavigationContainer>
	)
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
