import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
import Pagination from "../components/common/Pagination";
import { useEffect, useState } from "react";

const PageContainer = styled.div`
  padding: 0px 0px 90px 0px;
`;

const TitleContainer = styled.div`
  background-color: #fdffed;
  margin-top: 90px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 50px;
    margin-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  color: #166237;
  font-family: "Montserrat", serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const FirstContent = styled.div`
  color: #166237;
  font-size: 30px;
  font-family: "Montserrat", serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SecondContent = styled.div`
  color: #166237;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ThirdContent = styled.div`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
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

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const Icon = styled.div`
  color: lightgray;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const PaginationContainer = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

interface Promotion {
  eventId: string;
  eventImage: string;
  eventTitle: string;
}

const apiKey = import.meta.env.REACT_APP_SERVER_URL;

const SpecialWeddingPromotion = () => {
  // const navigate = useNavigate();
  const [images, setImages] = useState<Promotion[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      // TODO:: 밑에 넣어두긴 했는데 바꿔주셈 243번째 줄 페이지네이션도 바꿔주셈 막 넣음
      const result = await fetchPageData(currentPage, itemsPerPage);
      if (result) {
        setImages(result.promotions);
        setTotalPages(Math.ceil(result.total / itemsPerPage));
      }
    };
    fetchData();
  }, [currentPage]);

  const fetchPageData = async (lastId: number, limit: number) => {
    try {
      const serverPath = apiKey;

      // TODO:: 페이지 네이션 lastId, limit 넣어주셈
      const response = await fetch(
        `${serverPath}/community/?lastId=${lastId}&limit=${limit}`
      );
      console.log(response);
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

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
          {images.map((item, index) => (
            <ImgContainer
              key={index}
              // onClick={() => navigate(`/wedding-promotion-detail/${item.eventId}`)}
            >
              <Img src={item.eventImage} alt={item.eventTitle} />
              <ImageTitle>{item.eventTitle}</ImageTitle>
            </ImgContainer>
          ))}
        </ImagesContainer>
      </EventsContainer>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </PageContainer>
  );
};

export default SpecialWeddingPromotion;
