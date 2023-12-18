import axios from "axios";

 const api = axios.create({
    // baseURL: "http://192.168.0.100:3000"
    baseURL: "https://musicapi-w7kn.onrender.com"
});

export default api