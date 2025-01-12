import { useState, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import styled from "@emotion/styled";

const HeaderContainer = styled.div<{ $height: string }>`
  height: ${(props) => props.$height};
  /* border: 1px solid black; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 20;
  transition: all 0.2s;
  box-shadow: ${(props) => (props.$height === '90px') ? 'none' : '0px 2px 8px 0px #33333380'};
`;

const FirstHeaderContainer = styled.nav<{ $height: string }>`
  width: 100%;
  height: ${(props) => props.$height};
  /* border: 1px solid black; */
  /* border: 3px solid blue; */
  display: flex;
  padding: 0px 30px;

  @media screen and (max-width: 1200px) {
    padding: 0px 20px;
  }
`;

const LogoButton = styled.a`
  width: 200px;
  height: 90%;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    width: 140px;
  }
`;

const LogoContainer = styled.img`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NavContainer = styled.div<{ $height: string }>`
  height: ${(props) => props.$height};
  /* border: 5px solid green; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: all 0.2s;
`;

const NavInContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

const NavButtonBox = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  cursor: pointer;
`;

const NavButton = styled.a<{ $height: string }>`
  height: ${(props) => props.$height};
  min-height: ${(props) => props.$height};
  color: #333333;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    color: #f86723;
  }

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

// const FirstSubMenuContainer = styled.div`
//   /* border: 1px solid black; */
//   display: none;
//   flex-direction: column;
//   justify-content: start;
//   align-items: start;
//   gap: 16px;
//   font-size: 14px;
//   padding-top: 20px;
// `;

// const SubMenuButton = styled.a`
//   padding-bottom: 4px;
//   border-bottom: 2px solid transparent;
//   transition: all 0.2s;

//   &:hover {
//     border-bottom: 2px solid #cc6d41;
//   }
// `;

const HeaderBackground = styled.div`
  background-color: #ffffff;
  height: 400px;
  position: fixed;
  top: -400px;
  left: 0;
  right: 0;
  transition: all 0.2s;
`;

const DownloadButton = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #f86723;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    padding: 8px 10px;
    font-size: 10px;
    gap: 4px;
  }
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  background-color: #e9e9e9;

  @media screen and (max-width: 1200px) {
    width: 10px;
    height: 10px;
  }
`;

const Header = () => {

  const [scroll, setScroll] = useState<boolean>(window.scrollY > 0);

  useEffect(() => {
    const scrollEvent = () => {
      const y = window.scrollY;
      if (y > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      };
    };

    document.addEventListener('scroll', scrollEvent);

    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <HeaderContainer $height={(scroll) ? '70px' : '90px'}>
      <HeaderBackground />
      <FirstHeaderContainer $height={(scroll) ? '80px' : '100px'}>
        <LogoButton href="/">
          <LogoContainer
            src={logo}
            alt="Logo" />
        </LogoButton>
        <NavContainer $height={(scroll) ? '70px' : '90px'}>
          <NavInContainer>
            <NavButtonBox>
              <NavButton
                href='/reservation'
                $height={(scroll) ? '70px' : '90px'}>
                Reservation
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href='/wedding-promotion'
                $height={(scroll) ? '70px' : '90px'}>
                스페셜 웨딩 프로모션
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href='/wedding-hall'
                $height={(scroll) ? '70px' : '90px'}>
                Wedding & Party
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href='/about-us'
                $height={(scroll) ? '70px' : '90px'}>
                About us
              </NavButton>
            </NavButtonBox>
            <DownloadButton>
              {/* 아래에 Icon에 다운 아이콘 사용 */}
              <Icon />
              청첩장 용 다운로드
            </DownloadButton>
          </NavInContainer>
        </NavContainer>
      </FirstHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
