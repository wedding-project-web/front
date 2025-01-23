import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
  width: 385px;
  height: 385px;
  margin-top: 20px; /* 이미지 위에 간격 */
  margin-bottom: 20px; /* 이미지 아래에 간격 */

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const PromotionImg = styled.img`
  width: 100%;
  height: 100%;
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

interface Props {
  data: any;
}

const PromotionEvents = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleImageClick = (communityId: number) => {
    navigate(`/wedding-promotion-detail/${communityId}`);
  };

  return (
    <EventsContainer>
      <Event>Event</Event>
      <ImagesContainer>
        {data.length > 0 ? (
          data.map((item: any, index: any) => (
            <ImgContainer key={index}>
              <PromotionImg
                src={item.image_url}
                alt={item.title}
                onClick={() => handleImageClick(item.communityId)}
              />
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
