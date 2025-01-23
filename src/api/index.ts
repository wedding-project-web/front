import axios from "axios";

// 서버 Url instance 세팅

// const host =
//   window.location.hostname === "localhost"
//     ? `${import.meta.env.VITE_APP_SERVER_URL}/community`
//     : "community";

// export const communityInstance = axios.create({
//   baseURL: host,
// });

export const instance = axios.create({
  baseURL:'https://api.marieedemay.com',
});

export default instance;
