import styled from "@emotion/styled";
import first from "../assets/image/first.jpg";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  padding: 150px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 0px 30px 0px;
  }
`;

const Event = styled.div`
  font-size: 18px;
  margin: 10px 0px 10px 0px;
  font-family: "Montserrat", serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-family: "Montserrat", serif;
  margin: 30px 0px 50px 0px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 20px 0px 30px 0px;
  }
`;

const ImgContainer = styled.div`
  width: 870px;
  height: 870px;

  @media (max-width: 1024px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;

const KakaoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const KakaoButton = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #ffeb00; /* 카카오톡 기본 노란색 */
  color: #000; /* 글씨는 검은색 */
  padding: 15px 30px; /* 버튼 크기 */
  font-size: 15px; /* 글씨 크기 */
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 버튼 그림자 */
  text-align: center;
  transition: all 0.3s ease;
  margin: 50px 0px 0px 0px;
  cursor: pointer;
  width: 200px;

  &:hover {
    background-color: #ffd700; /* 살짝 더 진한 노란색 */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15); /* hover 시 그림자 강조 */
  }

  @media (max-width: 768px) {
    width: 150px;
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const List = styled.div`
  background-color: #166237;
  color: white;
  width: 80px;
  padding: 10px;
  margin: 30px 0px 0px 0px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    padding: 8px;
    font-size: 14px;
  }
`;

const Container = styled.div`
  width: 870px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 0px 20px 0px;

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const SpecialWeddingPromotionDetailPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Container>
        <Event>Event</Event>
        <SubTitle>2026년 3월 예식 예약 상담 open</SubTitle>
        <ImgContainer>
          <Img src={first} />
        </ImgContainer>
        <KakaoContainer>
          <KakaoButton target="_blank" rel="noopener noreferrer">
            카카오톡 상담하기
          </KakaoButton>
        </KakaoContainer>
        <List onClick={() => navigate("/wedding-promotion")}>목록</List>
      </Container>
    </PageContainer>
  );
};

export default SpecialWeddingPromotionDetailPage;
