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
  margin: 0px 0px 30px 0px;

  img {
    width: 60px;
    height: 60px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
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
        <Title>MAY STORY</Title>
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
