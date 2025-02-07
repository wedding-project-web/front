import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import logo from "../../assets/logo/logo.png";
import styled from "@emotion/styled";
import Download from "../../assets/icon/download-white.svg";

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
  user-select: none;
  box-shadow: ${(props) =>
    props.$height === "90px" ? "none" : "0px 2px 8px 0px #33333380"};

  @media screen and (max-width: 1200px) {
    height: 70px;
  }
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
    height: 70px;
  }
`;

const LogoButton = styled.a`
  width: 300px;
  height: 80%;
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    width: 200px;
  }

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

  @media screen and (max-width: 1200px) {
    height: 70px;
  }
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

const NavUnderBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #0e6333;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NavButton = styled.a<{ $color: string; $height: string }>`
  height: ${(props) => props.$height};
  min-height: ${(props) => props.$height};
  color: ${(props) => props.$color};
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s;
  text-transform: uppercase;
  font-family: "Merriweather"; /* 영어+한글 폰트 적용 */
  position: relative;

  &:hover {
    color: #0e6333;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 10px;
    height: 70px;
    min-height: 70px;
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
  background-color: #166237;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    padding: 8px 10px;
    font-size: 10px;
    gap: 4px;
  }
`;

const DownloadIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const Header = () => {
  const path = window.location.pathname;
  const [scroll, setScroll] = useState<boolean>(window.scrollY > 0);

  useEffect(() => {
    const scrollEvent = () => {
      const y = window.scrollY;
      if (y > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    document.addEventListener("scroll", scrollEvent);

    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const downloadFile = async () => {
    // S3 URL을 포함한 파일 목록
    const files = [
      {
        url: "https://image-maridmay.s3.ap-northeast-2.amazonaws.com/location.zip", // S3 ZIP 파일 링크
        name: "청첩장용 약도.zip",
      },
    ];

    for (const file of files) {
      try {
        const response = await fetch(file.url); // S3 URL로 파일을 가져옵니다.

        // 오류 처리
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file.url}`);
        }

        const blob = await response.blob(); // 응답을 Blob으로 변환
        saveAs(blob, file.name); // 파일 다운로드 (이 파일을 바로 다운로드)
      } catch (error) {
        console.error(`Failed to fetch ${file.url}:`, error);
      }
    }
  };

  return (
    <HeaderContainer $height={scroll ? "70px" : "90px"}>
      <HeaderBackground />
      <FirstHeaderContainer $height={scroll ? "80px" : "100px"}>
        <LogoButton href="/">
          <LogoContainer src={logo} alt="Logo" />
        </LogoButton>
        <NavContainer $height={scroll ? "70px" : "90px"}>
          <NavInContainer>
            <NavButtonBox>
              <NavButton
                href="/reservation"
                $color={path === "/reservation" ? "#166237" : "#333333"}
                $height={scroll ? "70px" : "90px"}
              >
                Reservation
                {path === "/reservation" && <NavUnderBar />}
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href="/wedding-promotion"
                $color={path === "/wedding-promotion" ? "#166237" : "#333333"}
                $height={scroll ? "70px" : "90px"}
              >
                Wedding Promotion
                {path.includes("/wedding-promotion") && <NavUnderBar />}
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href="/wedding-hall"
                $color={path === "/wedding-hall" ? "#166237" : "#333333"}
                $height={scroll ? "70px" : "90px"}
              >
                Wedding & Party
                {path === "/wedding-hall" && <NavUnderBar />}
              </NavButton>
            </NavButtonBox>
            <NavButtonBox>
              <NavButton
                href="/about-us"
                $color={path === "/about-us" ? "#166237" : "#333333"}
                $height={scroll ? "70px" : "90px"}
              >
                About us
                {path === "/about-us" && <NavUnderBar />}
              </NavButton>
            </NavButtonBox>
            <DownloadButton onClick={downloadFile}>
              <DownloadIcon src={Download} alt="download" />
              청첩장 용 다운로드
            </DownloadButton>
          </NavInContainer>
        </NavContainer>
      </FirstHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
