import axios from "axios";

const instance = axios.create({
    headers:{
        Accept: "application/json",
    },
    baseURL: "http://127.0.0.1:8000/api",
      withCredentials: true,
});
export default instance;
