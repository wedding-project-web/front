import styled from "@emotion/styled";
import mainWedding from "../assets/image/wedding-hall.jpg";
import leftArrow from "../assets/icon/arrow-left.png";
import rightArrow from "../assets/icon/arrow-right.png";
import { useState } from "react";
import weddingHall from "../assets/image/wedding-hall.jpg";
import virginRoad from "../assets/image/virgin_road.jpg";
import weddingHallStage from "../assets/image/hall_stage.jpg";
import bridal from "../assets/image/bridal_room.jpg";
import banquet1 from "../assets/image/banquet_hall1.jpg";
import banquet2 from "../assets/image/banguet_hall2.jpg";

const PageContainer = styled.div`
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #22202080;
    height: 100vh;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  z-index: 2;
  font-family: "Merriweather"; /* 영어+한글 폰트 적용 */;
  text-align: center;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.div`
  font-size: 40px;
  margin: 150px 0px 0px 0px;
  font-family: "Merriweather"; /* 영어+한글 폰트 적용 */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
    margin: 80px 0px 0px 0px;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  gap: 30px;
  margin: 80px 0px 0px 0px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 40px 0px 0px 0px;
    gap: 20px;
    padding: 0 20px;
    line-height: 1.5;
  }
`;

const MainContent = styled.div`
  color: #166237;
  font-size: 30px;
  margin: 50px 0px 100px 0px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 19px;
    margin: 30px 0px 60px 0px;
  }
`;

const ImgSlideContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0px 0px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 30px 0px 0px 0px;
  }
`;

const ImgGalleryContainer = styled.div`
  font-size: 50px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 40px;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 0px 0px 0px 50px;
  font-family: "Merriweather"; /* 영어+한글 폰트 적용 */


  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 20px;
    align-items: center;
  }
`;

const GalleryContents = styled.div`
  color: black;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
  }
`;

const GalleryContentsContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  margin: 30px 0px 0px 0px;

  @media (max-width: 768px) {
    font-size: 13px;
    gap: 20px;
    align-items: center;
  }
`;

const UnderlinedText = styled.div`
  text-decoration: underline;
  text-decoration-color: lightgray;
  cursor: pointer;
  text-underline-offset: 6px; /* 밑줄과 텍스트 사이의 간격을 추가 */
  margin-bottom: 8px; /* 텍스트 아래 간격 추가 */
  letter-spacing: 1px; /* 글자 사이 간격을 추가 */

  &:hover {
    color: #166237;
    text-decoration-color: #166237;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 50px 0px 0px 0px;

  @media (max-width: 768px) {
    margin: 20px 0 20px 0;
    gap: 20px;
  }
`;

const LeftArrow = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const RightArrow = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const WeddingAndPartyPage = () => {
  // const images = [mainWedding, front,back ,bridal, banquet, secondBanquet]; // 보여줄 이미지 배열
  const images = [weddingHall, weddingHallStage , virginRoad, bridal, banquet1, banquet2]; // 보여줄 이미지 배열
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSelectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <PageContainer>
      <ImgContainer>
        <MainImg src={mainWedding} />
        <Title>WEDDING & PARTY</Title>
      </ImgContainer>

      <SubTitle>WEDDING & PARTY</SubTitle>

      <ContentsContainer>
        <div>여유롭고 낭만적이면서 프라이빗한 공간이 연출되는 단독 웨딩 홀</div>
        <div>
          차별화된 우아함과 격식을 통해 신랑, 신부님의 품격을 한층 돋보이게
          해드리겠습니다.
        </div>
        <div>
          산뜻한 야외 가든을 연상케하는 아름다운 웨딩 베뉴이면서 대규모 컨벤션홀
          무대조명 못지않은
        </div>
        <div>
          화려한 프리미엄 단독홀에서 특별한 하우스 예식을
          기대해보셔도 좋습니다.
        </div>
        <div>
          러블리한 플라워 데코레이션을 풍성하게 연출하여 싱그러운 야외예식을
          연상케하는 상상 이상의 아름다움
        </div>
        <MainContent>
          여유와 낭만 그리고 프라이빗 공간, 단독 웨딩 홀
        </MainContent>
      </ContentsContainer>

      <ImgSlideContainer>
        <ImgGalleryContainer>
          <Img
              src={images[currentIndex]}
            alt={`Wedding Hall ${currentIndex + 1}`}
          />
        </ImgGalleryContainer>
        <SubContainer>
          <GalleryContents>Gallery of Hall</GalleryContents>
          <GalleryContentsContainer>
            <UnderlinedText onClick={() => handleSelectImage(0)}>
              Wedding Hall
            </UnderlinedText>
            <UnderlinedText onClick={() => handleSelectImage(1)}>
              Hall Stage
            </UnderlinedText>
            <UnderlinedText onClick={() => handleSelectImage(2)}>
              Virgin Road
            </UnderlinedText>
            <UnderlinedText onClick={() => handleSelectImage(3)}>
              Bridal Room
            </UnderlinedText>
            <UnderlinedText onClick={() => handleSelectImage(4)}>
              Banquet Hall 1
            </UnderlinedText>
            <UnderlinedText onClick={() => handleSelectImage(5)}>
              Banquet Hall 2
            </UnderlinedText>
          </GalleryContentsContainer>
          <ArrowContainer>
            <LeftArrow onClick={handlePrev}>
              <img src={leftArrow} />
            </LeftArrow>
            <RightArrow onClick={handleNext}>
              <img src={rightArrow} />
            </RightArrow>
          </ArrowContainer>
        </SubContainer>
      </ImgSlideContainer>
    </PageContainer>
  );
};

export default WeddingAndPartyPage;
