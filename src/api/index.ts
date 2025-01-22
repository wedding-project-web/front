import axios from "axios";

// 서버 Url instance 세팅

const host =
  window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : import.meta.env.VITE_APP_SERVER_URL;

export const instance = axios.create({
  baseURL: host,
});

export default instance;
