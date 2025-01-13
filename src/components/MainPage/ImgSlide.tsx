import styled from "@emotion/styled";
// import back from "../assets/image/10. 예식홀-후면.jpg";
import front from "../../assets/image/10. 웨딩홀 정면.jpg";
import bridal from "../../assets/image/신부대기실.jpg";
import banquet from "../../assets/image/14 연회장.jpg";
import { useState } from "react";
import leftArrow from "../../assets/icon/arrow-left.png";
import rightArrow from "../../assets/icon/arrow-right.png";

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 0px 0px 0px 50px;
  font-family: "Montserrat", serif;
`;

const ImgSlideContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0px 0px 0px;
`;

const ImgGalleryContainer = styled.div`
  font-size: 50px;
  width: 70%;
`;

const GalleryContentsContainer = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  margin: 30px 0px 0px 0px;
`;

const GalleryContents = styled.div`
  color: black;
  font-size: 50px;
`;

const Img = styled.img`
  width: 100%;
`;

const UnderlinedText = styled.div`
  text-decoration: underline;
  text-decoration-color: #ababab;
  cursor: pointer;

  &:hover {
    color: #166237;
    text-decoration-color: #166237;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
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
`;

const ImgSlide = () => {
  const images = [front, bridal, banquet]; // 보여줄 이미지 배열
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
            Wedding Hall Back
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(1)}>
            Wedding Hall Front
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(2)}>
            Bridal Room
          </UnderlinedText>
          <UnderlinedText onClick={() => handleSelectImage(3)}>
            Banquet Hall
          </UnderlinedText>
        </GalleryContentsContainer>
        <ArrowContainer>
          <LeftArrow onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" />
          </LeftArrow>
          <RightArrow onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
          </RightArrow>
        </ArrowContainer>
      </SubContainer>
    </ImgSlideContainer>
  );
};

export default ImgSlide;
