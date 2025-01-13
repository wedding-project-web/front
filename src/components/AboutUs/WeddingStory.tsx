import styled from "@emotion/styled";
import second from "../../assets/image/second.jpg";

const FirstImgContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px 100px 0px;
`;

const ImgContainer = styled.div`
  width: 380px;
  height: 550px;
  /* border: 2px solid blue; */
`;

const Img = styled.img`
  width: 100%;
`;

const FirstContentTitleContainer = styled.div``;

const FirstContentTitle = styled.div`
  font-size: 30px;

  /* border: 3px solid yellow; */
  color: #a68a00;
`;

const FirstContentsContainer = styled.div`
  /* border: 1px solid red; */
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
const FirstContents = styled.div`
  /* border: 1px solid black; */
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 130px 0px 130px;
  gap: 60px;
  line-height: 30px;
`;

const WeddingStory = () => {
  return (
    <FirstImgContentsContainer>
      <ImgContainer>
        <Img src={second} />
      </ImgContainer>
      <ContentsContainer>
        <FirstContentTitleContainer>
          <FirstContentTitle>BRIDE OF MAY WEDDING STORY</FirstContentTitle>
          <FirstContentTitle>오월의 신부 웨딩 이야기</FirstContentTitle>
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
    </FirstImgContentsContainer>
  );
};

export default WeddingStory;
