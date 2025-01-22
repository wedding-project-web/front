import axios from "axios";

// 서버 Url instance 세팅
export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export default instance;
