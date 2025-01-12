import styled from "@emotion/styled";
import first from "../assets/image/first.jpg";

const PageContainer = styled.div`
  padding: 0px 0px 100px 0px;
`;
const TitleContainer = styled.div`
  background-color: #fbfff2;
  margin-top: 100px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  color: #166237;
`;

const SubContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`;

const FirstContent = styled.div`
  color: #166237;
  font-size: 30px;
`;

const SecondContent = styled.div`
  color: #166237;
  font-size: 20px;
`;
const ThirdContent = styled.div`
  font-size: 15px;
`;

const EventsContainer = styled.div`
  border: 1px solid blue;
  width: 1195px;
  margin: 0 auto;
`;

const Event = styled.div`
  border: 1px solid red;
  display: flex;
  font-size: 18px;
  margin: 10px 0px 10px 0px;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border: 1px solid black;
  width: 1195px;
`;

const ImgContainer = styled.div`
  height: 385px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageTitle = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: start;
`;

const Icon = styled.div`
  color: gray;
  font-size: 30px;
`;
const SpecialWeddingPromotion = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <Title>Special Wedding Promotion</Title>
        <Title>오월의 신부 프로모션</Title>
      </TitleContainer>
      <SubContainer>
        <FirstContent>Promotion</FirstContent>
        <SecondContent>오월의 신부 프로모션</SecondContent>
        <Icon>X</Icon>
        <ThirdContent>오월의 신부 다양한 프로모션을 진행합니다.</ThirdContent>
      </SubContainer>

      <EventsContainer>
        <Event>Event</Event>
        <ImagesContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
          <ImgContainer>
            <Img src={first} />
            <ImageTitle>00000</ImageTitle>
          </ImgContainer>
        </ImagesContainer>
      </EventsContainer>
    </PageContainer>
  );
};

export default SpecialWeddingPromotion;
