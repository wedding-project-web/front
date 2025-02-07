import styled from "@emotion/styled";
import { useState } from "react";
import quotes from "../assets/icon/quotes.png";
import MusicWedding from "../components/AboutUs/MusicWedding";
import WeddingStory from "../components/AboutUs/WeddingStory";
import location from "../assets/image/location.jpg";

interface TabProps {
  active: boolean;
}

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
    font-family: "Merriweather"

    @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.7;
  }
`;

const Container = styled.div`
  background-color: #166237;
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const Tab = styled.div<TabProps>`
  color: ${(props) => (props.active ? "#fff" : "#ccc")};
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #fff" : "none")};
  padding: 10px 20px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
  }
`;

const SubContainer = styled.div`
  padding: 30px 0px 0px 0px;

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
    max-width: 100%;
    height: auto;
    display: block;

    @media (max-width: 768px) {
      max-width: 80px;
    }
  }
`;

const FirstContent = styled.div`
  color: #166237;
  font-size: 20px;
  text-align: center;
  line-height: 1.7;
    font-family: "Merriweather"; /* 영어+한글 폰트 적용 */
    font-size: 25px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SecondContent = styled.div`
  color: #166237;
  font-size: 30px;
    font-family: "Merriweather"; /* 영어+한글 폰트 적용 */
    text-align: center;
  margin: 10px 0px 10px 0px;
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

const XIcon = styled.div`
  width: 30px;
  height: 30px;
  color: lightgray;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;

const LocationImg = styled.img`
  width: 600px;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;
const AboutUsPage = () => {
  // 현재 선택된 탭 상태 관리
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div>
      <TitleContainer>
        <Title>마리드 메이 이야기</Title>
      </TitleContainer>

      {/* 탭 */}
      <Container>
        <Tab
          active={activeTab === "story"}
          onClick={() => setActiveTab("story")}
        >
          마리드 메이 이야기
        </Tab>
        <Tab
          active={activeTab === "location"}
          onClick={() => setActiveTab("location")}
        >
          Location
        </Tab>
      </Container>

      {/* 탭에 따라 내용 렌더링 */}
      {activeTab === "story" && (
        <SubContainer>
          <IconContainer>
            <img src={quotes} alt="Quotes Icon" />
          </IconContainer>
          <FirstContent>새로운 웨딩 문화의 시작</FirstContent>
          <SecondContent>New Wedding Culture</SecondContent>
          <ThirdContent>
            웨딩 베뉴 안에서 시작되는 이야기가 아닌 신랑신부의 이야기에서 시작되는
            웨딩, <br />그 이야기의 새로운 시작을 마리드 메이에서 만들어갑니다.
          </ThirdContent>
          <WeddingStory />
          <MusicWedding />
        </SubContainer>
      )}

      {activeTab === "location" && (
        <LocationContainer>
          <FirstContent>
            Location
            <br />
            마리드 메이 오시는 길
          </FirstContent>
          <XIcon>X</XIcon>
          <ThirdContent>마리드 메이 오시는 길을 안내해드립니다</ThirdContent>
          <LocationImg src={location} />
        </LocationContainer>
      )}
    </div>
  );
};

export default AboutUsPage;
