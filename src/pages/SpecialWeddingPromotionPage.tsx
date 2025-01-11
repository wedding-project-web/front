import styled from "@emotion/styled";
import quotes from "../assets/icon/quotes.png";
import WeddingStory from "../components/SpecialWeddingPromotion/WeddingStory";
import MusicWedding from "../components/SpecialWeddingPromotion/MusicWedding";

const TitleContainer = styled.div`
  background-color: #fcfff0;
  padding: 50px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #166237;
`;

const SubContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`;

const IconContainer = styled.div``;
const FirstContent = styled.div`
  color: #166237;
  font-size: 20px;
`;

const SecondContent = styled.div`
  color: #166237;
  font-size: 30px;
`;
const ThirdContent = styled.div`
  font-size: 18px;
`;

const SpecialWeddingPromotionPage = () => {
  return (
    <div>
      <TitleContainer>
        <Title>오월의 정원 STORY</Title>
      </TitleContainer>
      <SubContainer>
        <IconContainer>
          <img src={quotes} />
        </IconContainer>
        <FirstContent>새로운 웨딩 문화의 시작</FirstContent>
        <SecondContent>New Wedding Culture</SecondContent>
        <ThirdContent>
          웨딩홀 안에서 시작되는 이야기가 아닌 신랑신부의 이야기에서 시작되는
          웨딩, <br />그 이야기의 새로운 시작을 오월의 신부에서 만들어갑니다.
        </ThirdContent>
      </SubContainer>
      <WeddingStory />
      <MusicWedding />
    </div>
  );
};

export default SpecialWeddingPromotionPage;
