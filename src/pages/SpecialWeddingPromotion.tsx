import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getWeddingPromotionApi } from "../api/weddingPromotion";
import Pagination from "../components/common/Paging";
import PromotionEvents from "../components/SpecialWeddingPromotion/PromotionEvents";
import SpecialTitle from "../components/SpecialWeddingPromotion/SpecialTitle";
import SubTitle from "../components/SpecialWeddingPromotion/SubTitle";
import { pagination } from "../store/pagination";

const PageContainer = styled.div`
  padding: 0px 0px 90px 0px;
`;

const PaginationContainer = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const SpecialWeddingPromotion = () => {
  const currentPage = useRecoilValue(pagination);

  const { isLoading, error, data } = useQuery(
    ["weddingPromotionData", currentPage],
    () => getWeddingPromotionApi(currentPage),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <div>로딩중</div>;
  console.log("웨딩프로모션 사이트", data);
  if (error) {
    console.log(error);
  }

  return (
    <PageContainer>
      <SpecialTitle />
      <SubTitle />
      <PromotionEvents data={data} />
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </PageContainer>
  );
};

export default SpecialWeddingPromotion;
