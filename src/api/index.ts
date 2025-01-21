import axios from "axios";

// 서버 Url instance 세팅
const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_SERVER_URL,
});

export default instance;
