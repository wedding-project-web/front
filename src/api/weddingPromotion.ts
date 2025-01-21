// 웨딩 프로모션 조회
// import instance from ".";
import axios from "axios";

export const getWeddingPromotionApi = async (page: number) => {
  const res = await axios.get(
    `http://43.201.68.53:8080/community/?page=${page}`
  );
  console.log("res", res);
  return res;
};

export const getWeddingPromotionDetailApi = async (communityId: number) => {
  const res = await axios.get(
    `http://43.201.68.53:8080/community/${communityId}/read`
  );
  console.log("res", res);
  return res;
};
