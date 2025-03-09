import styled from "@emotion/styled";
import second from "../../assets/image/about-1.png"

const FirstImgContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
  }
`;

const ImgContainer = styled.div`
  width: 380px;
  height: 550px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지 및 크기 조정 */

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
`;

const FirstContents = styled.div`
  @media (max-width: 768px) {
    text-align: center;
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

const WeddingStory = () => {
  return (
    <FirstImgContentsContainer>
      <ImgContainer>
        <Img src={second} alt="Wedding Story" />
      </ImgContainer>
      <ContentsContainer>
        <FirstContentTitleContainer>
          <FirstContentTitle>
            Mariée de May Story
            <br />
          </FirstContentTitle>
        </FirstContentTitleContainer>
        <FirstContentsContainer>
          <FirstContents>
            마리드메이는 많은 신랑신부님의 가장 아름다운 첫날을 <br />
            가장 행복하게 시작하실 수 있도록 <br />
            오월의신부를 시작으로 약 30년간 함께해오고 있습니다. <br />
          </FirstContents>
          <FirstContents>
            마리드메이는 전문적인 웨딩 서비스와 세심한 디자인으로 <br/>
            신랑신부님만의 특별한 하루를 아름답고 완벽하게 함께합니다.<br/>
            신뢰와 품격으로 보답하는 마리드메이입니다.
          </FirstContents>
        </FirstContentsContainer>
      </ContentsContainer>
    </FirstImgContentsContainer>
  );
};

export default WeddingStory;
