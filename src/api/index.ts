import axios from "axios";

// 서버 Url instance 세팅

const host =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_APP_SERVER_URL
    : "api";

export const instance = axios.create({
  baseURL: host,
});

export default instance;
