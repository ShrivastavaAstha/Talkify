import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://talkify-znj9.onrender.com";
