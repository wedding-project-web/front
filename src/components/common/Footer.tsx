import styled from "@emotion/styled";
import logo from "../../assets/logo/logo.png";

const FooterContainer = styled.div`
  padding: 40px;
  display: flex;
  gap: 30px;
  border: 1px solid black;
`;

const ImgContainer = styled.div``;

const ContentsContainer = styled.div`
  color: #b4b4b4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
`;

const FirstContentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const SecondContentsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SubTitle = styled.span`
  font-weight: 700;
`;

const TopClick = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ImgContainer>
        <img src={logo} alt="Logo" />
      </ImgContainer>
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
        <div>Copyright© 웨딩 오월의 신부 All Rights Reserved.</div>
      </ContentsContainer>
      <TopClick>Top</TopClick>
    </FooterContainer>
  );
};

export default Footer;
