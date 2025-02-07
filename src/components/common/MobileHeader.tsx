import styled from "@emotion/styled";
import weddingLogo from "../../assets/logo/logo.png";
import { useState } from "react";
import Hambug from "./Hambug";
import Download from "../../assets/icon/download-white.svg";

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
  box-shadow: 0px 2px 6px 0px #33333333;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  width: 160px;
  height: 90%;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ListButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SubHeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #166237;
  box-shadow: 0px 2px 6px 0px #33333333;
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
  font-family: "Merriweather"; /* 영어+한글 폰트 적용 */
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #bebebe;
  }
`;

const DownloadIcon = styled.img`
  width: 14px;
  height: 14px;
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
          <Hambug isOpen={isOpen} />
        </ListButton>
      </HeaderWrapper>
      {isOpen && (
        <SubHeaderContainer>
          <SubNavContainer href="/reservation">Reservation</SubNavContainer>
          <SubNavContainer href="/wedding-promotion">
            Wedding Promotion
          </SubNavContainer>
          <SubNavContainer href="/wedding-hall">
            Wedding & Party
          </SubNavContainer>
          <SubNavContainer href="/about-us">About us</SubNavContainer>
          <SubNavContainer style={{ fontFamily: "inherit" }}>
            <DownloadIcon src={Download} alt='download' />
            청첩장 용 다운로드
          </SubNavContainer>
        </SubHeaderContainer>
      )}
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
