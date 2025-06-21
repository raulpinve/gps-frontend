import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Crear instancia de axios
const api = axios.create({
    baseURL: "http://192.168.10.14:3000"
})

// Agregar interceptores para insertar token automáticamente
api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
)

export default api;