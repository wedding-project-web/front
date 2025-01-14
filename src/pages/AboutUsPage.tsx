import styled from "@emotion/styled";
import quotes from "../assets/icon/quotes.png";
import WeddingStory from "../components/AboutUs/WeddingStory";
import MusicWedding from "../components/AboutUs/MusicWedding";

const TitleContainer = styled.div`
  background-color: #fbfff2;
  margin-top: 90px;
  padding: 90px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px;
    margin-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  color: #166237;
  font-family: "Montserrat", serif;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.7;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IconContainer = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%; /* 부모 크기에 맞게 이미지 조정 */
    height: auto; /* 이미지 종횡비 유지 */
    display: block; /* inline 요소 문제 방지 */

    @media (max-width: 768px) {
      max-width: 80px; /* 작은 화면에서도 적절한 크기 */
    }
  }
`;

const FirstContent = styled.div`
  color: #166237;
  font-size: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SecondContent = styled.div`
  color: #166237;
  font-size: 30px;
  font-family: "Montserrat", serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ThirdContent = styled.div`
  font-size: 18px;
  line-height: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const AboutUsPage = () => {
  return (
    <div>
      <TitleContainer>
        <Title>
          MAY STORY
          <br /> 오월의 신부 이야기
        </Title>
      </TitleContainer>
      <SubContainer>
        <IconContainer>
          <img src={quotes} alt="Quotes Icon" />
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

export default AboutUsPage;
