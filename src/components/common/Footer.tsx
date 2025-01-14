import styled from "@emotion/styled";
import top from "../../assets/icon/arrow-up.svg";

const FooterContainer = styled.div`
  padding: 40px;
  display: flex;
  gap: 30px;
  border-top: 1px solid lightgray;
  flex-wrap: wrap; /* 반응형 레이아웃: 줄바꿈 허용 */

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
    flex-direction: column; /* 모바일에서는 세로 배치 */
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
  flex-direction: column;
  gap: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 15px;
  }
`;

const FirstContentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap; /* 줄바꿈 허용 */

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서는 세로 배치 */
    gap: 10px;
  }
`;

const SecondContentsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ThirdContentsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubTitle = styled.span`
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px; /* 작은 화면에서 폰트 크기 조정 */
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
    width: 40px;
    height: 40px; /* 아이콘 크기 축소 */
  }
`;

const IconTop = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px; /* 아이콘 크기 조정 */
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
