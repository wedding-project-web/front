import styled from "@emotion/styled";

const EventsContainer = styled.div`
  width: 1195px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Event = styled.div`
  font-size: 18px;
  margin: 10px 0px;
  font-family: "Montserrat", serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 25px;
  padding: 20px;
  margin: 0 auto;
  grid-column: 1 / -1; /* 모든 열을 차지하도록 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* 적당한 높이 설정 */
  font-family: "Montserrat", serif;
`;

const ImgContainer = styled.div`
  height: 385px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: start;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const PromotionEvents = () => {
  return (
    <EventsContainer>
      <Event>Event</Event>
      <ImagesContainer>
        {images.length > 0 ? (
          images.map((item, index) => (
            // TODO :: 내가 이미지 url 보낼께 s3 url로 보냄
            // TODO :: 이미지 클릭시 상세 페이지로 이동 고 느낌
            <ImgContainer key={index}>
              <ImageTitle>{item.title}</ImageTitle>
            </ImgContainer>
          ))
        ) : (
          <ErrorMessage>No Promotion</ErrorMessage>
        )}
      </ImagesContainer>
    </EventsContainer>
  );
};

export default PromotionEvents;
