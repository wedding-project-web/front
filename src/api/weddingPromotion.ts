// 웨딩 프로모션 조회
import instance from ".";

export const getWeddingPromotionApi = async (
  currentPage: number
  //   limit: number
) => {
  const res = await instance.get(`/community/?lastId=${currentPage}&limit=15`);
  return res;
};
