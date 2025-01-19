import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Banner from "../components/common/Banner";
import ImgSlide from "../components/MainPage/ImgSlide";

const MainPageContainer = styled.section`
  min-height: 100dvh;
`;

const HiddenSection = styled.section<{ isVisible: boolean }>`
  transition: transform 0.6s ease-out, opacity 0.6s ease-out; /* 부드러운 스크롤 효과 */
  opacity: ${(props) =>
    props.isVisible ? 1 : 0}; /* 보일 때는 완전 보이게, 숨길 때는 투명하게 */
  transform: ${(props) =>
    props.isVisible
      ? "translateY(0)"
      : "translateY(50px)"}; /* 스크롤 시 위로 올라오는 효과 */
`;

const MainPage = () => {
  const [isImgSlideVisible, setIsImgSlideVisible] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const bannerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBannerVisible(entry.isIntersecting); // Banner가 화면에 보일 때 true
      },
      { threshold: 0.1 } // 화면에 10% 이상 보일 때 상태 업데이트
    );

    const imgSlideObserver = new IntersectionObserver(
      ([entry]) => {
        setIsImgSlideVisible(entry.isIntersecting); // ImgSlide가 화면에 보일 때 true
      },
      { threshold: 0.1 } // 화면에 10% 이상 보일 때 상태 업데이트
    );

    const bannerElement = document.getElementById("banner");
    const imgSlideElement = document.getElementById("imgSlide");

    if (bannerElement) bannerObserver.observe(bannerElement);
    if (imgSlideElement) imgSlideObserver.observe(imgSlideElement);

    return () => {
      if (bannerElement) bannerObserver.unobserve(bannerElement);
      if (imgSlideElement) imgSlideObserver.unobserve(imgSlideElement);
    };
  }, []);

  return (
    <MainPageContainer>
      <HiddenSection isVisible={isBannerVisible} id="banner">
        <Banner />
      </HiddenSection>
      <HiddenSection isVisible={isImgSlideVisible} id="imgSlide">
        <ImgSlide />
      </HiddenSection>
    </MainPageContainer>
  );
};

export default MainPage;
