import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";

const CommonLayout = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Layout = () => {

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 840);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if (width < 840) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      };
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <CommonLayout>
      {(isMobile) ? <MobileHeader /> : <Header />}
      <Outlet />
      <Footer />
    </CommonLayout>
  );
};

export default Layout;
