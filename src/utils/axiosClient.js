import BASE_URL from "../config/api";
import axios from "axios";


const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
    },
});

export default axiosClient