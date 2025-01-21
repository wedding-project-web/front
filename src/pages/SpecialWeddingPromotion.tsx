import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getWeddingPromotionApi } from "../api/weddingPromotion";
import Pagination from "../components/common/Pagination";
import { pagination } from "../store/pagination";
import SpecialTitle from "../components/SpecialWeddingPromotion/SpecialTitle";
import SubTitle from "../components/SpecialWeddingPromotion/SubTitle";
import PromotionEvents from "../components/SpecialWeddingPromotion/PromotionEvents";

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

// interface Promotion {
//   communityId: string;
//   image_url: string;
//   title: string;
// }

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // TODO:: 밑에 넣어두긴 했는데 바꿔주셈 243번째 줄 페이지네이션도 바꿔주셈 막 넣음
  //     const result = await fetchPageData(currentPage, itemsPerPage);
  //     if (result) {
  //       setImages(result);
  //       setTotalPages(Math.ceil(result.total / itemsPerPage));
  //     }
  //   };
  //   fetchData();
  // }, [currentPage]);

  // const fetchPageData = async (lastId: number, limit: number) => {
  //   try {
  //     // TODO:: 페이지 네이션 lastId, limit 넣어주셈
  //     // TODO:: lastId는 첫번째 페이지면 0부터 넣어주셈
  //     const response = await fetch(
  //       `${serverPath}/community/?lastId=${lastId}&limit=${limit}`
  //     );

  //     const data = await response.json(); // 데이터를 한번만 받음
  //     console.log("q3werqwdifcnqwoei", data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return null;
  //   }
  // };

  return (
    <PageContainer>
      <SpecialTitle />
      <SubTitle />
      <PromotionEvents />
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </PageContainer>
  );
};

export default SpecialWeddingPromotion;
