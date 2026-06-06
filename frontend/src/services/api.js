import axios from "axios";

const api = axios.create({
  baseURL: "https://founderos-backend-tsu6.onrender.com/api",
});

export default api;