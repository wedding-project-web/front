import styled from "@emotion/styled";
import first from "../assets/image/first.jpg";

const PageContainer = styled.div`
  padding: 100px 0px 100px 0px;
`;

const ImgContainer = styled.div`
  width: 870px;
  height: 870px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SpecialWeddingPromotionDetailPage = () => {
  return (
    <PageContainer>
      <div>Event</div>
      <div>2026년 3월 예식 예약 상담 open</div>
      <ImgContainer>
        <Img src={first} />
      </ImgContainer>
    </PageContainer>
  );
};

export default SpecialWeddingPromotionDetailPage;
