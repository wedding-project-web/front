import styled from "@emotion/styled";
import top from "../../assets/icon/arrow-up.svg";

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
  flex-direction: column;
  gap: 10px; /* 더 작은 간격 */
  font-size: 8px; /* 진짜 작은 폰트 크기 */
  font-weight: 100; /* 얇은 폰트 굵기 */

  @media (max-width: 768px) {
    font-size: 6px; /* 모바일에서는 더 작은 폰트 크기 */
    width: 100%;
  }
`;

const FirstContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px; /* 더 작은 간격 */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const SecondContentsContainer = styled.div`
  display: flex;
  gap: 5px; /* 더 작은 간격 */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const ThirdContentsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 6px; /* 모바일에서도 작은 폰트 */
  }
`;

const SubTitle = styled.span`
  font-weight: 100; /* 얇은 폰트 굵기 */
  font-size: 8px; /* 더 작은 폰트 크기 */

  @media (max-width: 768px) {
    font-size: 6px; /* 모바일에서 더 작은 폰트 */
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
    height: 40px;
  }
`;

const IconTop = styled.img`
  width: 20px; /* 더 작은 아이콘 */
  height: 20px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px; /* 모바일에서 아이콘 크기 더 줄이기 */
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
          <SubTitle>웨딩 마리드 메이</SubTitle>
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
          <div>Copyright© 마리드 메이 All Rights Reserved.</div>
        </ThirdContentsContainer>
      </ContentsContainer>
      <TopClick onClick={handleScrollToTop}>
        <IconTop src={top} />
      </TopClick>
    </FooterContainer>
  );
};

export default Footer;
