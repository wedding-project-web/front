import { useRef, useState, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  height: 100px;
  border: 1px solid black;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

const FirstHeaderContainer = styled.div`
  height: 100%;
  border: 3px solid blue;
  display: flex;
`;

const LogoContainer = styled.img`
  border: 1px solid red;
  width: auto;
  height: 100%;
  object-fit: contain;
`;

const NavContainer = styled.div`
  height: 100%;
  border: 5px solid green;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const NavButtonBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
`;

const NavButton = styled.a`
  height: 100px;
  min-height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const FirstSubMenuContainer = styled.ul`
  border: 1px solid black;
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
`;

const Header = () => {
  const hollRef = useRef<HTMLUListElement>(null);
  const banquetRef = useRef<HTMLUListElement>(null);
  const reservationRef = useRef<HTMLUListElement>(null);
  const communityRef = useRef<HTMLUListElement>(null);
  const locationRef = useRef<HTMLUListElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    if (
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
    } else {
      hollRef.current.style.display = "none";
      banquetRef.current.style.display = "none";
      reservationRef.current.style.display = "none";
      communityRef.current.style.display = "none";
      locationRef.current.style.display = "none";
    }
  }, [isHover]);

  return (
    <HeaderContainer>
      <FirstHeaderContainer>
        <LogoContainer src={logo} alt="Logo" />
        <NavContainer>
          <NavButtonBox>
            <NavButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Hall Tour
            </NavButton>
            <FirstSubMenuContainer ref={hollRef}>
              <li>웨딩홀</li>
              <li>신부대기실</li>
              <li>폐백실</li>
              <li>드레스실</li>
              <li>식순안내</li>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Banquet
            </NavButton>
            <FirstSubMenuContainer ref={banquetRef}>
              <li>Banquet</li>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Reservation
            </NavButton>
            <FirstSubMenuContainer ref={reservationRef}>
              <li>Reservation</li>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Community
            </NavButton>
            <FirstSubMenuContainer ref={communityRef}>
              <li>웨딩후기</li>
              <li>이벤트</li>
              <li>뉴스</li>
            </FirstSubMenuContainer>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Location
            </NavButton>
            <FirstSubMenuContainer ref={locationRef}>
              <li>Location</li>
            </FirstSubMenuContainer>
          </NavButtonBox>
        </NavContainer>
      </FirstHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
