import styled from "@emotion/styled";
import second from "../../assets/image/second.jpg";

const Container = styled.div`
  background-color: #ffffee;
  display: flex;
  justify-content: center;
  padding: 140px 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 80px 20px;
  }
`;

const FirstImgContainer = styled.div`
  width: 300px;
  height: 400px;

  @media (max-width: 768px) {
    width: 240px;
    height: 320px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지 및 프레임에 맞게 조정 */

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;

const FirstContentTitleContainer = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FirstContentTitle = styled.div`
  font-size: 30px;
  color: #a68a00;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.7;
  }
`;

const FirstContentsContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const FirstContents = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.6;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 130px;
  gap: 60px;
  line-height: 30px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 30px;
    line-height: 24px;
  }
`;

const MusicWedding = () => {
  return (
    <Container>
      <ContentsContainer>
        <FirstContentTitleContainer>
          <FirstContentTitle>
            BRIDE OF MAY WEDDING STORY
            <br /> 오월의 신부 웨딩 이야기
          </FirstContentTitle>
        </FirstContentTitleContainer>
        <FirstContentsContainer>
          <FirstContents>
            서울 강남의 쉼터 율현공원과 탄천이 어우러지는 곳으로 <br />
            싱그러운 자연의 품 속에서 <br />
            따뜻한 색감을 담아내고 있습니다. <br />
          </FirstContents>
          <FirstContents>
            자연의 선물을 받은 공간, 빌라드지디 수서는 <br />
            도심을 벗어나 자연과 하나된 웨딩홀을 선사하고 싶습니다.
          </FirstContents>
        </FirstContentsContainer>
      </ContentsContainer>
      <FirstImgContainer>
        <Img src={second} alt="Wedding Story" />
      </FirstImgContainer>
    </Container>
  );
};

export default MusicWedding;
