import styled from "@emotion/styled";
import Banner from "../components/common/Banner";
import ImgSlide from "../components/MainPage/ImgSlide";

const MainPageContainer = styled.section`
  min-height: 100dvh;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <Banner />
      <ImgSlide />
    </MainPageContainer>
  );
};

export default MainPage;
