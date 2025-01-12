import styled from "@emotion/styled";
import weddingLogo from "../../assets/logo/logo.png";
import { useState } from "react";

const MobileHeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  width: 120px;
  height: 80%;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ListButton = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const SubHeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #e75632;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 19;
`;

const SubNavContainer = styled.a`
  width: 100%;
  padding: 20px 10px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #e9e9e9;
  color: #ffffff;
  font-family: "Montserrat", serif;
  text-transform: uppercase;
`;

const MobileHeader = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MobileHeaderContainer>
      <HeaderWrapper>
        <LogoContainer href="/">
          <LogoImage src={weddingLogo} />
        </LogoContainer>
        <ListButton onClick={() => setIsOpen(!isOpen)}>
          Icon
        </ListButton>
      </HeaderWrapper>
      {(isOpen)
        && <SubHeaderContainer>
          <SubNavContainer href='/reservation'>
            Reservation
          </SubNavContainer>
          <SubNavContainer href='/wedding-promotion'>
            Wedding Promotion
          </SubNavContainer>
          <SubNavContainer href='/wedding-hall'>
            Wedding & Party
          </SubNavContainer>
          <SubNavContainer href='/about-us'>
            About us
          </SubNavContainer>
          <SubNavContainer style={{ fontFamily: 'inherit' }}>
            청첩장 용 다운로드
          </SubNavContainer>
        </SubHeaderContainer>}
    </MobileHeaderContainer>
  )
};

export default MobileHeader;