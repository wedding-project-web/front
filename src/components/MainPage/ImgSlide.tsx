import styled from "@emotion/styled";
import virginRoad from "../../assets/image/10. 웨딩홀 정면.jpg";
import weddingHallStage from "../../assets/image/10. 웨딩홀 정면.jpg";
import bridal from "../../assets/image/신부대기실.jpg";
import banquet1 from "../../assets/image/14 연회장.jpg";
import banquet2 from "../../assets/image/14 연회장2.jpg";
import { useState } from "react";
import leftArrow from "../../assets/icon/chevron-left.svg";
import rightArrow from "../../assets/icon/chevron-right.svg";

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 0px 0px 0px 50px;
  font-family: "Montserrat", serif;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
    align-items: center;
  }
`;

const ImgSlideContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0px 0px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgGalleryContainer = styled.div`
  font-size: 50px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GalleryContentsContainer = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  margin: 30px 0px 0px 0px;

  @media (max-width: 768px) {
    font-size: 18px;
    align-items: center;
  }
`;

const GalleryContents = styled.div`
  color: black;
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const UnderlinedText = styled.div`
  text-decoration: underline;
  text-decoration-color: lightgray;
  cursor: pointer;
  text-underline-offset: 6px; /* 밑줄과 텍스트 사이의 간격을 추가 */
  margin-bottom: 8px; /* 텍스트 아래 간격 추가 */

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
    gap: 15px;
    margin: 30px 0px 0px 0px;
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
  cursor: pointer;

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
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Arrow = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const ImgSlide = () => {
  const images = [virginRoad, weddingHallStage, bridal, banquet1, banquet2]; // 보여줄 이미지 배열
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
    setCurrentIndex(index); // 선택한 index로 currentIndex 설정
  };

  return (
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
            버진로드
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(1)}>
            웨딩홀 스테이지
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(2)}>
            신부대기실
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(3)}>
            연회장1
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(4)}>
            연회장2
          </UnderlinedText>
        </GalleryContentsContainer>
        <ArrowContainer>
          <LeftArrow onClick={handlePrev}>
            <Arrow src={leftArrow} alt="Previous" />
          </LeftArrow>
          <RightArrow onClick={handleNext}>
            <Arrow src={rightArrow} alt="Next" />
          </RightArrow>
        </ArrowContainer>
      </SubContainer>
    </ImgSlideContainer>
  );
};

export default ImgSlide;
