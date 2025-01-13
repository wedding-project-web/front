import styled from "@emotion/styled";
import top from "../../assets/icon/up-arrow.png";

const FooterContainer = styled.div`
  padding: 40px;
  display: flex;
  gap: 30px;
  border-top: 1px solid lightgray;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 70px;

  @media (max-width: 768px) {
    width: 80px;
    height: 60px;
  }
`;

const ContentsContainer = styled.div`
  color: #b4b4b4;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
`;

const FirstContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const SecondContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ThirdContentsContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SubTitle = styled.span`
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TopClick = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f4f4f4;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const IconTop = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <ImgContainer>{/* <img src={logo} alt="Logo" /> */}</ImgContainer>
      <ContentsContainer>
        <FirstContentsContainer>
          <SubTitle>웨딩 오월의 신부</SubTitle>
          <div>
            <SubTitle>대표 </SubTitle>
            김지영 외 1
          </div>
          <div>
            <SubTitle>사업자번호 </SubTitle>
            881-01-01481
          </div>
          <div>
            <SubTitle>개인정보보호책임자 </SubTitle>
            010-5064-2526
          </div>
          <div>
            <SubTitle>주소 </SubTitle>
            대구광역시 수성구 동대구로 157
          </div>
        </FirstContentsContainer>
        <SecondContentsContainer>
          <div>
            <SubTitle>TEL </SubTitle>
            053-763-6161
          </div>
          <div>
            <SubTitle>FAX </SubTitle>
            053-763-0319
          </div>
          <div>
            <SubTitle>E-mail </SubTitle>
            bm6161@naver.com
          </div>
        </SecondContentsContainer>
        <ThirdContentsContainer>
          <div>Copyright© 웨딩 오월의 신부 All Rights Reserved.</div>
        </ThirdContentsContainer>
      </ContentsContainer>
      <TopClick onClick={handleScrollToTop}>
        <IconTop src={top} />
      </TopClick>
    </FooterContainer>
  );
};

export default Footer;
