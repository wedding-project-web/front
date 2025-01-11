import styled from "@emotion/styled";
import mainWedding from "../assets/image/wedding-hall.jpg";
import back from "../assets/image/10. 예식홀-후면.jpg";
import front from "../assets/image/10. 웨딩홀 정면.jpg";
import { useState } from "react";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center; /* 이미지 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  height: auto; /* 높이는 자동 조정 */
`;

const Title = styled.div`
  font-size: 50px;
  margin: 50px 0px 0px 0px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 20px;
  margin: 50px 0px 0px 0px;
`;

const ImgSlideContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0px 0px 0px;
`;

const ImgGalleryContainer = styled.div`
  font-size: 50px;
`;

const GalleryContents = styled.div``;

const Img = styled.img`
  width: 1300px;
`;

const LeftArrow = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightArrow = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WeddingHallPage = () => {
  const images = [back, front]; // 보여줄 이미지 배열
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
  return (
    <div>
      <ImgContainer>
        <img src={mainWedding} />
      </ImgContainer>
      {/* <div>WEDDING HALL</div> */}
      <Title>WEDDING HALL</Title>

      <ContentsContainer>
        <div>
          01여유롭고 낭만적이면서 프라이빗한 공간이 연출되는 단독 웨딩 홀
        </div>
        <div>
          02차별화된 우아함과 격식을 통해 신랑, 신부님의 품격을 한층 돋보이게
          해드리겠습니다.
        </div>
        <div>
          03산뜻한 야외 가든을 연상케하는 아름다운 웨딩홀이면서 대규모 컨벤션홀
          무대조명 못지않은 화려한 프리미엄 단독홀에서 특별한 하우스 예식을
          기대해보셔도 좋습니다.
        </div>
        <div>
          04러블리한 플라워 데코레이션을 풍성하게 연출하여 싱그러운 야외예식을
          연상케하는 상상 이상의 아름다움
        </div>
        <div>여유와 낭만 그리고 프라이빗 공간, 단독 웨딩 홀</div>
      </ContentsContainer>

      <ImgSlideContainer>
        <ImgGalleryContainer>
          <Img
            src={images[currentIndex]}
            alt={`Wedding Hall ${currentIndex + 1}`}
          />
        </ImgGalleryContainer>
        <div>
          <GalleryContents>Gallery of Hall</GalleryContents>
          <div>
            <div>first</div>
            <div>second</div>
            <div>third</div>
          </div>
          <div>
            <LeftArrow onClick={handlePrev}>←</LeftArrow>
            <RightArrow onClick={handleNext}>→</RightArrow>
          </div>
        </div>
      </ImgSlideContainer>
    </div>
  );
};

export default WeddingHallPage;
