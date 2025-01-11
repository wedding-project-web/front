import styled from "@emotion/styled";
import Banner from "../components/common/Banner";

const MainPageContainer = styled.section`
  min-height: 100dvh;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <Banner />
    </MainPageContainer>
  );
};

export default MainPage;
