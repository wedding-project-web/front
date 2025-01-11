import { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import styled from "@emotion/styled";

const HeaderContainer = styled.div<{ $bgcolor: string, $height: string }>`
  height: ${(props) => props.$height};
  /* border: 1px solid black; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${(props) => props.$bgcolor};
  transition: all 0.2s;
`;

const FirstHeaderContainer = styled.div<{ $height: string }>`
  height: ${(props) => props.$height};
  /* border: 1px solid black; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* border: 3px solid blue; */
  display: flex;
  padding: 0px 20px;
`;

const LogoContainer = styled.img`
  /* border: 1px solid red; */
  width: 200px;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const NavContainer = styled.div`
  height: 100%;
  /* border: 5px solid green; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 68%;
  margin-left: 120px;
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

const NavButton = styled.a<{ $height: string, $color: string }>`
  width: 100%;
  height: ${(props) => props.$height};
  min-height: ${(props) => props.$height};
  color: ${(props) => props.color};
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    color: #cc6d41;
  }
`;

const FirstSubMenuContainer = styled.div`
  /* border: 1px solid black; */
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  font-size: 14px;
  padding-top: 20px;
`;

const SubMenuButton = styled.a`
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid #cc6d41;
  }
`;

const HeaderBackground = styled.div`
  background-color: #ffffff;
  height: 400px;
  position: fixed;
  top: -400px;
  left: 0;
  right: 0;
  transition: all 0.2s;
`;

const Header = () => {
  const hollRef = useRef<HTMLDivElement>(null);
  const banquetRef = useRef<HTMLDivElement>(null);
  const reservationRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(window.scrollY > 200);

  useEffect(() => {
    const scrollEvent = () => {
      const y = window.scrollY;
      if (y > 200) { setScroll(true) }
      else { setScroll(false) };
    };

    document.addEventListener('scroll', scrollEvent);

    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  useEffect(() => {
    if (
      !bgRef.current ||
      !hollRef.current ||
      !banquetRef.current ||
      !reservationRef.current ||
      !communityRef.current ||
      !locationRef.current
    )
      return;
    if (isHover) {
      hollRef.current.style.display = "flex";
      banquetRef.current.style.display = "flex";
      reservationRef.current.style.display = "flex";
      communityRef.current.style.display = "flex";
      locationRef.current.style.display = "flex";
      bgRef.current.style.transform = "translateY(400px)";
    } else {
      hollRef.current.style.display = "none";
      banquetRef.current.style.display = "none";
      reservationRef.current.style.display = "none";
      communityRef.current.style.display = "none";
      locationRef.current.style.display = "none";
      bgRef.current.style.transform = "translateY(0px)";
    }
  }, [isHover]);

  return (
    <HeaderContainer
      $bgcolor={(scroll) ? '#ffffff' : 'transparent'}
      $height={(scroll) ? '80px' : '100px'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <HeaderBackground
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        ref={bgRef} />
      <FirstHeaderContainer $height={(scroll) ? '80px' : '100px'}>
        <LogoContainer
          src={logo}
          alt="Logo" />
        <NavContainer>
          <NavButtonBox>
            <NavButton
              $color={(scroll) ? '#000000' : '#ffffff'}
              $height={(scroll) ? '80px' : '100px'}>
              Reservation
            </NavButton>
            <FirstSubMenuContainer
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              ref={hollRef}>
              <SubMenuButton>웨딩홀</SubMenuButton>
              <SubMenuButton>신부대기실</SubMenuButton>
              <SubMenuButton>폐백실</SubMenuButton>
              <SubMenuButton>드레스실</SubMenuButton>
              <SubMenuButton>식순안내</SubMenuButton>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              $color={(scroll) ? '#000000' : '#ffffff'}
              $height={(scroll) ? '80px' : '100px'}>
              스페셜 웨딩 프로모션
            </NavButton>
            <FirstSubMenuContainer 
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              ref={banquetRef}>
              <SubMenuButton>Banquet</SubMenuButton>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              $color={(scroll) ? '#000000' : '#ffffff'}
              $height={(scroll) ? '80px' : '100px'}>
              Wedding & Party
            </NavButton>
            <FirstSubMenuContainer
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              ref={reservationRef}>
              <SubMenuButton>Reservation</SubMenuButton>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              $color={(scroll) ? '#000000' : '#ffffff'}
              $height={(scroll) ? '80px' : '100px'}>
              About us
            </NavButton>
            <FirstSubMenuContainer
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              ref={communityRef}>
              <SubMenuButton>웨딩후기</SubMenuButton>
              <SubMenuButton>이벤트</SubMenuButton>
              <SubMenuButton>뉴스</SubMenuButton>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              $color={(scroll) ? '#000000' : '#ffffff'}
              $height={(scroll) ? '80px' : '100px'}>
              청첩장 용 약도 다운
            </NavButton>
            <FirstSubMenuContainer
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              ref={locationRef}>
              <SubMenuButton>Location</SubMenuButton>
            </FirstSubMenuContainer>
          </NavButtonBox>
        </NavContainer>
      </FirstHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
