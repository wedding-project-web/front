import { instance } from ".";

// 웨딩 프로모션 조회
export const getWeddingPromotionApi = async (page: number) => {
  const res = await instance.get(`/community?page=${page}`);
  return res;
};

export const getWeddingPromotionDetailApi = async (communityId: number) => {
  const res = await instance.get(`/${communityId}/read`);
  return res.data;
};
