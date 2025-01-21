// 웨딩 프로모션 조회
import instance from ".";

export const getWeddingPromotionApi = async (page: number) => {
  const res = await instance.get(`/community/?page=${page}`);
  return res;
};
