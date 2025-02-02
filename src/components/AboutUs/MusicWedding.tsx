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
            Nature Inspired Wedding
            {/*<br /> 메리드 메이 웨딩 이야기*/}
          </FirstContentTitle>
        </FirstContentTitleContainer>
        <FirstContentsContainer>
          <FirstContents>
            아름다운 나무들과 청량한 하늘이 함께하여<br />
            마치 야외가든에 와있는 듯한 로맨틱한 분위기를 연출합니다. <br />
          </FirstContents>
          자연의 선물을 받은 공간, 마리드메이는
          도심을 벗어나 자연과 하나된 웨딩홀을 선사하고 싶습니다.
          <FirstContents>
            자연의 선물을 받은 공간, 마리드메이는 <br/>
            도심을 벗어나 자연과 하나된 웨딩홀을 선사하고 싶습니다.<br/>
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
