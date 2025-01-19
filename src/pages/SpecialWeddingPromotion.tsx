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
  communityId: string;
  image_url: string;
  title: string;
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
        setImages(result);
        setTotalPages(Math.ceil(result.total / itemsPerPage));
      }
    };
    fetchData();
  }, [currentPage]);

  const fetchPageData = async (lastId: number, limit: number) => {
    try {
      // const serverPath = apiKey;
      // TODO:: path env 수정 좀! 바뀜
      const serverPath = "http://43.201.68.53:8080";

      // TODO:: 페이지 네이션 lastId, limit 넣어주셈
      // TODO:: lastId는 첫번째 페이지면 0부터 넣어주셈
      const response = await fetch(
        `${serverPath}/community/?lastId=${lastId}&limit=${limit}`
      );

      const data = await response.json();  // 데이터를 한번만 받음
      console.log('q3werqwdifcnqwoei',data);
      return data;
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
          {images.length > 0 ? (
              images.map((item, index) => (
                  // TODO :: 내가 이미지 url 보낼께 s3 url로 보냄
                  // TODO :: 이미지 클릭시 상세 페이지로 이동 고 느낌
                  <ImgContainer key={index}>
                    <ImageTitle>{item.title}</ImageTitle>
                  </ImgContainer>
              ))
          ) : (
              // TODO:: 이미지 없을때 이 문구 띄워죠 그냥 중간에 대충 넣어도됨 니멋대로
              <div>No images available</div>
          )}
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
