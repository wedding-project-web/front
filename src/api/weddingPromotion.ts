import { communityInstance } from ".";

// 웨딩 프로모션 조회
export const getWeddingPromotionApi = async (page: number) => {
  const res = await communityInstance.get(`/community?page=${page}`);
  console.log("res", res);
  return res;
};

export const getWeddingPromotionDetailApi = async (communityId: number) => {
  const res = await communityInstance.get(`/community/${communityId}/read`);
  console.log("res", res);
  return res.data;
};
